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
        this.scrollObject = React.createRef();
    }
    intersectionCallback(entries) {
        entries.forEach(entry => {
            if (entry.target.classList.contains("scroll-object") && entry.isIntersecting) {
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
    componentDidMount() {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.05,
        }

        let observer = new IntersectionObserver(this.intersectionCallback, options);

        let target = this.scrollObject.current;
        observer.observe(target);
    }

    render() {
        return (
            <div className="font-Poppins">
                <Hero />
                <Nav nav={this.state.nav} />
                <Hamburger nav={this.state.nav} />
                <div ref={this.scrollObject} className="scroll-object absolute border-2 border-green-400 w-full">
                    <AboutMe />
                    <Projects />
                </div>
            </div>

        )
    }
}

const application = document.getElementById("app");
ReactDom.render(React.createElement(App), application);