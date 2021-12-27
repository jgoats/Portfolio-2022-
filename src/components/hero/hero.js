import React from 'react';
import Background from "../../images/hero-background.png";
import "../../../dist/css/styles.css";
import "./hero.css";
import Justin from "../../images/JustinGoats.jpg";
import DownArrow from "../../images/down-arrow.svg";

export default function Hero() {
    return (
        <div className="relative bg-black flex flex-col w-full h-screen">
            <section className="h-full w-full hero flex flex-col gap-12 items-center justify-center"
                style={{
                    backgroundImage: `url(${Background})`, backgroundSize: "cover",
                    backgroundAttachment: "fixed"
                }}>


            </section>
            <div className="absolute left-0 greeting-container w-full h-full flex flex-col gap-10 justify-center items-center">
                <img className=" relative justin-photo block rounded-full border-2 border-white" src={Justin} />
                <h1 className=" relative greeting block text-white text-center text-3xl">Hi, my name is Justin Goats and i'm a web developer</h1>
                <img className="relative down-arrow animate-bounce bottom-0" src={DownArrow} />
            </div>
        </div>
    )
}
