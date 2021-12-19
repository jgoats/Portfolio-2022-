import React from 'react';
import Hamburger from "../../images/menu.svg";
import "./nav.css";
import "../../../dist/css/styles.css";

export default class Nav extends React.Component {
    render() {
        return (
            <header className="absolute z-10 flex h-20 w-full">
                <div className="flex justify-end items-center w-full">
                    <ul className="nav-container md:flex hidden items-center justify-end flex-1 gap-20">
                        <li className="text-white nav-item">about me</li>
                        <li className="text-white nav-item">skills</li>
                        <li className="text-white nav-item">projects</li>
                        <li className="text-white nav-item">contact me</li>
                    </ul>
                </div>
            </header>
        )
    }
}
