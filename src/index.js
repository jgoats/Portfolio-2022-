import React from "react";
import ReactDom from "react-dom";
import Nav from "../src/components/navigation/nav.js";
import Hero from "../src/components/hero-section/hero.js";
import "tailwindcss/tailwind.css"

class App extends React.Component {
    render() {
        return (
            <div className="font-Poppins">
                <Nav />
                <Hero />
            </div>

        )
    }
}

const application = document.getElementById("app");
ReactDom.render(React.createElement(App), application);