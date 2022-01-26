import React from 'react';
import "../../../dist/css/styles.css";
import "./nav.css";

export default class Nav extends React.Component {
    render() {
        return (
            <header className={`${this.props.nav[0]} fixed z-10 top-0 flex w-full`}>
                <div className="flex justify-end items-center w-full">
                    <ul className="nav-container md:flex hidden items-center justify-end flex-1 gap-20">
                        <li className={`${this.props.nav[1]}`}>about me</li>
                        <li className={`${this.props.nav[1]}`}>projects</li>
                        <li className={`${this.props.nav[1]}`}>blog</li>
                        <li className={`${this.props.nav[1]}`}>contact me</li>
                    </ul>
                </div>
            </header>
        )
    }
}

