import React, { Component } from 'react';
import "./aboutme.css";

export default class AboutMe extends Component {
    render() {
        return (
            <section className="w-full h-screen flex items-center justify-center">
                <div className="elementOne absolute top-full left-0 bg-gradient-to-l from-green-700 to-green-100 w-1/6 h-1/4"></div>
                <div className="elementTwo absolute top-full right-0 bg-gradient-to-r from-indigo-700 to-indigo-100 w-1/6 h-1/4"></div>
                <div className="p-12 flex filter shadow-2xl rounded-lg flex-col gap-12 w-1/2 h-2/3">
                    <h1 className="text-black font-semibold text-4xl">About Me</h1>
                    <div className="flex shadow-slate-200 justify-end w-full h-full items-center">
                        <p className="text-left text-lg leading-loose w-2/3">
                            I bring designs to life using the latest technologies including Tailwind, React, and Express
                            to create professional mobile responsive websites and applications. <span className="block">(ps: I love coffee)</span>
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
