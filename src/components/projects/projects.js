import React, { Component } from 'react';
import "./projects.css";
import "../../../dist/css/styles.css";
import Bitcoin from "../../images/bitcoin.svg";
import Crypto from "../../images/crypto-app.PNG";

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.projects = React.createRef();
    }
    componentDidMount() {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }

        let observer = new IntersectionObserver(this.props.intersectionCallback, options);

        let target = this.projects.current;
        observer.observe(target);
    }
    render() {
        return (
            <div className="">
                <h1 className=" mt-10 text-3xl font-bold text-center w-full">Projects</h1>
                <div className="flex flex-1 flex-wrap justify-around p-10">
                    <div ref={this.projects} className="card shadow-black shadow-xl">
                        <div className="card-heading h-10 w-full flex items-center justify-center">
                            <h1 className="">Crypto Currency Tracker</h1>
                        </div>
                        <div className="flex items-center justify-center card-img w-full">
                            <img className="h-10 w-10" src={Bitcoin} alt='' />
                        </div>
                        <div className="card-description h-1/2 w-full flex items-center p-5">
                            Search for and view all the most popular crypto currencies. Compare prices between cryto currencies and view accurate historic data.
                        </div>
                        <div className=" flex items-center justify-around card-btn-container h-10 w-full">
                            <button className="card-btn">view</button>
                            <button className="card-btn">code</button>
                            <button className="card-btn">info</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
