const clientPromise = require("../config/db");

const generateUrl = async (req, res) => {
    const body = req.body;

    // Validate URL
    try {
        new URL(body.url);
    } catch {
        return res.json({
            success: false,
            message: "Invalid URL"
        });
    }

    const shorturl = body.shorturl || Math.random().toString(36).substring(2, 8);

    // Validate shorturl
    if (!/^[a-zA-Z0-9_-]+$/.test(shorturl)) {
        return res.json({
            success: false,
            message: "Invalid short URL"
        });
    }

    try {
        const client = await clientPromise;
        const db = client.db("shrinkly");
        const collection = db.collection("url");

        // Check if the short url exists
        const doc = await collection.findOne({ shorturl });
        if (doc) {
            return res.json({ success: false, error: true, message: 'URL already exists!' });
        }

        const result = await collection.insertOne({
            url: body.url,
            shorturl,
            clicks: 0,
            createdAt: new Date()
        });

        return res.json({
            success: true,
            error: false,
            message: 'URL Generated Successfully',
            shorturl
        });
    } catch (err) {
        console.error("Database Error:", err);
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

const getUrl = async (req, res) => {
    const { shorturl } = req.params;

    try {
        const client = await clientPromise;
        const db = client.db("shrinkly");
        
        const doc = await db.collection("url").findOne({ shorturl });

        if (doc) {
            // click tracking
            await db.collection("url").updateOne(
                { shorturl },
                { $inc: { clicks: 1 } }
            );

            return res.json({ success: true, url: doc.url });
        }

        return res.status(404).json({ success: false, message: "URL not found" });
    } catch (err) {
        console.error("Database Error:", err);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
};

module.exports = {
    generateUrl,
    getUrl
};
