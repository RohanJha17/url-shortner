import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-purple-200 min-h-[82.8vh] pt-24">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl font-bold font-poppins">
            The best URL shortener in the market
          </p>
          <p className="text-center px-24">
            We are the most straightforward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.
          </p>
          <div className="btns flex gap-3 justify-start items-center p-4 text-white">
                <Link to="/shorten"><button className='cursor-pointer bg-purple-500 shadow-lg rounded-lg px-3 py-1 text-[16px] font-semibold'>Try Now</button></Link>
                <a href="/github" target="_blank" rel="noopener noreferrer"><button className='cursor-pointer bg-purple-500 shadow-lg rounded-lg px-3 py-1 text-[16px] font-semibold'>GitHub</button></a>
          </div>
        </div>
        <div className="flex justify-start relative">
          <img className="mix-blend-darken object-cover w-full h-full" src="/vector.jpg" alt="vector" />
        </div>
      </section>
    </main>
  );
}
