import React from 'react';
import "../../../dist/css/styles.css";

export default function Hero() {

    return (
        <main className="text-center flex flex-col flex-1 container">
            <h1 className=" dark:text-white z-10 text-gray-800 text-3xl mb-4">Hi, My Name Is Justin And I Am A Web Developer</h1>
            <p className=" dark:text-white z-10 text-gray-800 mb-8">Click below to view some of my work</p>
            <div className="hover:text-black z-10"><button className=" hover:bg-white hover:text-black transition duration-300 z-10 btn btn-primary">View Projects</button></div>
        </main>
    )
}
