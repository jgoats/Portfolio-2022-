import React, { Component } from 'react';
import "./hamburgernav.css";
import "../../../dist/css/styles.css";

export default class Hamburgernav extends Component {
    constructor() {
        super();
        this.hamburger = React.createRef();
        this.handleHamburger = this.handleHamburger.bind(this);
        this.closeHamburgerOnClick = this.closeHamburgerOnClick.bind(this);
        this.handleLink = this.handleLink.bind(this);
        this.state = {
            hamburgerToggle: 0,
            hamburgerClass: "hamburger-slider"
        }
    }
    handleHamburger(e) {
        e.stopPropagation();
        if (this.state.hamburgerToggle <= 0) {
            let hamburgerMenu = this.hamburger.current;
            hamburgerMenu.style.width = "30px"
            let firstChild = hamburgerMenu.firstChild;
            firstChild.style.transform = "rotate(45deg)";
            firstChild.style.top = "4px";
            firstChild.style.left = "2px";
            firstChild.style.borderBottom = "2px solid rgb(209,71,71)";
            firstChild.style.transition = "200ms";
            let secondChild = hamburgerMenu.childNodes[1];
            secondChild.style.transform = "rotate(135deg)";
            secondChild.style.top = "1px";
            secondChild.style.left = "1px";
            secondChild.style.transition = "200ms";
            let thirdChild = hamburgerMenu.childNodes[2];
            thirdChild.style.display = "none";
            this.setState({
                hamburgerToggle: this.state.hamburgerToggle += 1,
                hamburgerClass: "hamburger-slider-active"
            })
            this.props.handleScreenDim(true);
        }
        else {
            let hamburgerMenu = this.hamburger.current;
            let firstChild = hamburgerMenu.firstChild;
            firstChild.style.transform = "rotate(0deg)";
            firstChild.style.borderBottom = "2px solid white";
            firstChild.style.transition = "200ms";
            firstChild.style.top = "-3px";
            firstChild.style.left = "0px";
            let secondChild = hamburgerMenu.childNodes[1];
            secondChild.style.transform = "rotate(0deg)";
            secondChild.style.top = "-3px";
            secondChild.style.left = "0px";
            secondChild.style.transition = "200ms";
            let thirdChild = hamburgerMenu.childNodes[2];
            thirdChild.style.display = "block";
            this.setState({
                hamburgerToggle: this.state.hamburgerToggle -= 1,
                hamburgerClass: "hamburger-slider"
            })
            this.props.handleScreenDim(false);
        }
    }
    closeHamburgerOnClick(e) {
        e.stopPropagation();
    }
    handleLink() {
        this.setState({
            hamburgerClass: "hamburger-slider"
        })
        let hamburgerMenu = this.hamburger.current;
        let firstChild = hamburgerMenu.firstChild;
        firstChild.style.transform = "rotate(0deg)";
        firstChild.style.borderBottom = "2px solid white";
        firstChild.style.transition = "200ms";
        firstChild.style.top = "-3px";
        firstChild.style.left = "0px";
        let secondChild = hamburgerMenu.childNodes[1];
        secondChild.style.transform = "rotate(0deg)";
        secondChild.style.top = "-3px";
        secondChild.style.left = "0px";
        secondChild.style.transition = "200ms";
        let thirdChild = hamburgerMenu.childNodes[2];
        thirdChild.style.display = "block";
        this.setState({
            hamburgerToggle: this.state.hamburgerToggle -= 1,
            hamburgerClass: "hamburger-slider"
        })
        this.props.handleScreenDim(false);
    }
    render() {
        return (
            <div className="hamburger-container absolute z-10 h-screen flex">
                <div ref={this.hamburger} onClick={(e) => this.handleHamburger(e)} className="hamburger mt-7 md:hidden z-10 absolute block">
                    <div className="hamburger-item"></div>
                    <div className="hamburger-item"></div>
                    <div className="hamburger-item"></div>
                </div>
                <div onClick={(e) => this.closeHamburgerOnClick(e)} className={`${this.state.hamburgerClass} flex md:hidden items-center justify-center right-0 z-0 w-full bg-gray-900 opacity-95 h-screen absolute`}>
                    <ul className="flex flex-col gap-12">
                        <li onClick={this.handleLink} className="text-center text-white nav-item">about me</li>
                        <li onClick={this.handleLink} className="text-center text-white nav-item">skills</li>
                        <li onClick={this.handleLink} className="text-center text-white nav-item">projects</li>
                        <li onClick={this.handleLink} className="text-center text-white nav-item">contact me</li>
                    </ul>
                </div>
            </div>
        )
    }
}
