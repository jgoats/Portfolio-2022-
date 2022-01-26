import React, { Component } from 'react';
import "./hamburger.css";
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
            hamburgerSlider: "hamburger-slider",
            hamburgerColor: "white",
            hamburger: "hamburger-item-white"
        }
    }
    handleHamburger(e) {
        e.stopPropagation();
        this.state.hamburgerToggle <= 0 ? this.setState({
            hamburgerSlider: "hamburger-slider-active",
            hamburgerToggle: this.state.hamburgerToggle += 1
        }) : this.setState({
            hamburgerSlider: "hamburger-slider",
            hamburgerToggle: this.state.hamburgerToggle -= 1
        });

    }
    closeHamburgerOnClick(e) {
        e.stopPropagation();
        this.setState({
            hamburgerSlider: "hamburger-slider"
        })
    }
    handleLink() {
        this.setState({
            hamburgerSlider: "hamburger-slider",
            hamburgerToggle: 0,
        })
    }
    render() {
        return (
            <div className="hamburger-container md:w-10 w-full fixed z-10 top-0 h-screen flex">
                <div ref={this.hamburger} onClick={(e) => this.handleHamburger(e)} className={`hamburger mt-7 md:hidden z-10 relative block`}>
                    <div className={this.state.hamburgerToggle <= 0 ? this.props.nav[2] : "hamburger-item-white"}></div>
                    <div className={this.state.hamburgerToggle <= 0 ? this.props.nav[2] : "hamburger-item-white"}></div>
                    <div className={this.state.hamburgerToggle <= 0 ? this.props.nav[2] : "hamburger-item-white"}></div>
                </div>
                <div onClick={(e) => this.closeHamburgerOnClick(e)} className={`${this.state.hamburgerSlider} flex md:hidden items-center justify-center right-0 z-0 w-full bg-black opacity-95 h-screen absolute`}>
                    <ul className="flex flex-col gap-12">
                        <li onClick={this.handleLink} className={`text-white text-center`}>about me</li>
                        <li onClick={this.handleLink} className={`text-white text-center`}>skills</li>
                        <li onClick={this.handleLink} className={`text-white text-center`}>projects</li>
                        <li onClick={this.handleLink} className={`text-white text-center`}>contact me</li>
                    </ul>
                </div>
            </div>
        )
    }
}