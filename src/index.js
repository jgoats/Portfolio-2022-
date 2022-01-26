import React from "react";
import ReactDom from "react-dom";
import Hero from "./components/hero/hero.js";
import Nav from "../src/components/nav/nav.js";
import Hamburger from "./components/hamburger/hamburger.js";
import styles from "tailwindcss/tailwind.css";
import AboutMe from "../src/components/aboutme/aboutme.js";
import Projects from "../src/components/projects/projects.js";
import "../dist/css/styles.css";
import "./index.css";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            nav: ["nav", "nav-item", "hamburger-item-white"]
        }
        this.intersectionCallback = this.intersectionCallback.bind(this);
    }
    intersectionCallback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.setState({
                    nav: ["animate-nav", "nav-item-animate", "hamburger-item-black"]
                })
            }
            else {
                this.setState({
                    nav: ["nav", "nav-item", "hamburger-item-white"]
                })
            }
        });
    }

    render() {
        return (
            <div className="font-Poppins">
                <Hero />
                <Nav nav={this.state.nav} />
                <Hamburger nav={this.state.nav} />
                <div className="scroll-object absolute w-full h-full">
                    <AboutMe intersectionCallback={this.intersectionCallback} />
                    <Projects intersectionCallback={this.intersectionCallback} />
                </div>
            </div>

        )
    }
}

const application = document.getElementById("app");
ReactDom.render(React.createElement(App), application);