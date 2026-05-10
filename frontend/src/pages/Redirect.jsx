import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Redirect = () => {
    const { shorturl } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/url/${shorturl}`);
                const data = await response.json();
                
                if (data.success && data.url) {
                    window.location.href = data.url;
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error("Error fetching URL:", err);
                setError(true);
            }
        };

        fetchUrl();
    }, [shorturl]);

    if (error) {
        return (
            <div className="min-h-[82.8vh] flex items-center justify-center pt-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Not Found</h1>
                    <p className="text-lg">The shortened URL does not exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[82.8vh] flex items-center justify-center pt-24">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
                <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
        </div>
    );
};

export default Redirect;
