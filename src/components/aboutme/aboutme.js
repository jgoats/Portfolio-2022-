import React, { Component } from 'react';
import "../../../dist//css/styles.css";
import "./aboutme.css";
import HTML from "../../images/html-5.svg";
import CSS from "../../images/css-3.svg";
import JS from "../../images/js.svg";
import Reactjs from "../../images/react.svg";
import Node from "../../images/nodejs.svg";
import Mongo from "../../images/mongodb.png";
import Sass from "../../images/sass.svg";


export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.aboutme = React.createRef();
    }
    /*
    <img className="skill-icon" src={HTML} alt="" />
                        <img className="skill-icon" src={CSS} alt="" />
                        <img className="skill-icon" src={JS} alt="" />
                        <img className="skill-icon" src={Reactjs} alt="" />
                        <img className="skill-icon" src={Node} alt="" />
                        <img className="skill-icon" src={Mongo} alt="" />
                        <img className="skill-icon" src={Sass} alt="" />*/
    componentDidMount() {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        }

        let observer = new IntersectionObserver(this.props.intersectionCallback, options);

        let target = this.aboutme.current;
        observer.observe(target);
    }
    render() {
        return (
            <div ref={this.aboutme} className="aboutme-container md:flex w-full
             items-start justify-center mt-10">
                <main className=" aboutme-intro flex flex-col p-2 mb-10 md:items-start items-center justify-start w-full">
                    <h1 className="text-3xl text-center font-bold mt-3 w-full mb-6">Hello I am Justin</h1>
                    <div className="bg-green-100 p-4">
                        <h5 className="text-lg font-semibold">Web Developer from  Mesa, Arizona</h5>
                        <p className="mt-3 md:text-left text-left">I build good looking user interfaces using the most popular technologies including Tailwind.css and React.js</p>
                    </div>
                </main>
                <main className="aboutme-skills flex flex-col p-2 mb-10 md:items-start items-center justify-start w-full h-full">
                    <h1 className="text-3xl font-bold text-center w-full mt-3 mb-3">Skills</h1>
                    <div className="flex items-center w-full gap-5 flex-wrap mt-3 justify-center">
                        <div className="list-container">
                            <div className="flex flex-wrap justify-center">
                                <p className="list-item bg-indigo-200">HTML</p>
                                <p className="list-item bg-indigo-200">CSS</p>
                                <p className="list-item bg-indigo-200">JavaScript</p>
                                <p className="list-item bg-indigo-200">Tailwind.css</p>
                                <p className="list-item bg-indigo-200">Node.js</p>
                                <p className="list-item bg-indigo-200">SASS</p>
                                <p className="list-item bg-indigo-200">MongoDB</p>
                                <p className="list-item bg-indigo-200">React.js</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
