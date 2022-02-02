import React, { Component } from 'react';
import "./projects.css";
import "../../../dist/css/styles.css";
import CryptoAppOne from "../../images/crypto-application-1.PNG";
import CryptoAppTwo from "../../images/crypto-application-2.PNG";
import CryptoAppThree from "../../images/crypto-application-3.PNG";
import BudgetOne from "../../images/budget-app-1.PNG";
import BudgetTwo from "../../images/budget-app-2.PNG";
import BudgetThree from "../../images/budget-app-3.PNG";
import BlogOne from "../../images/blog-1.PNG";
import BlogTwo from "../../images/blog-2.PNG";
import BlogThree from "../../images/blog-3.PNG";


export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.projects = React.createRef();
        this.state = {
            cryptoImagePosition: ["card-image-btn-active", "card-image-btn", "card-image-btn"],
            budgetImagePosition: ["card-image-btn-active", "card-image-btn", "card-image-btn"],
            blogImagePosition: ["card-image-btn-active", "card-image-btn", "card-image-btn"],
            crypto: CryptoAppOne,
            budget: BudgetOne,
            blog: BlogOne
        }
        this.handleCryptoApp = this.handleCryptoApp.bind(this);
        this.handleBudgetApp = this.handleBudgetApp.bind(this);
        this.handleBlog = this.handleBlog.bind(this);
    }
    handleCryptoApp(item) {
        console.log("ran");
        switch (item) {
            case 0: {
                this.setState({
                    cryptoImagePosition: ["card-image-btn-active", "card-image-btn", "card-image-btn"],
                    crypto: CryptoAppOne,
                })
            }
                break;
            case 1: {
                this.setState({
                    cryptoImagePosition: ["card-image-btn", "card-image-btn-active", "card-image-btn"],
                    crypto: CryptoAppTwo,
                })
            }
                break;
            case 2: {
                this.setState({
                    cryptoImagePosition: ["card-image-btn", "card-image-btn", "card-image-btn-active"],
                    crypto: CryptoAppThree,
                })
            }
                break;
        }
    }
    handleBudgetApp(item) {
        switch (item) {
            case 0: {
                this.setState({
                    budgetImagePosition: ["card-image-btn-active", "card-image-btn", "card-image-btn"],
                    budget: BudgetOne,
                })
            }
                break;
            case 1: {
                this.setState({
                    budgetImagePosition: ["card-image-btn", "card-image-btn-active", "card-image-btn"],
                    budget: BudgetTwo,
                })
            }
                break;
            case 2: {
                this.setState({
                    budgetImagePosition: ["card-image-btn", "card-image-btn", "card-image-btn-active"],
                    budget: BudgetThree,
                })
            }
                break;
        }
    }
    handleBlog(item) {
        switch (item) {
            case 0: {
                this.setState({
                    blogImagePosition: ["card-image-btn-active", "card-image-btn", "card-image-btn"],
                    blog: BlogOne,
                })
            }
                break;
            case 1: {
                this.setState({
                    blogImagePosition: ["card-image-btn", "card-image-btn-active", "card-image-btn"],
                    blog: BlogTwo,
                })
            }
                break;
            case 2: {
                this.setState({
                    blogImagePosition: ["card-image-btn", "card-image-btn", "card-image-btn-active"],
                    blog: BlogThree,
                })
            }
                break;
        }
    }
    render() {
        return (
            <div className="projects-container">
                <h1 className="text-3xl text-center font-bold mt-3 w-full mb-6">Projects</h1>
                <div className="main-card-container">
                    <div>
                        <div className="date-container">
                            <h1>11/10/2021</h1>
                            <h1>--</h1>
                            <h1>1/20/2022</h1>
                        </div>
                        <section className="card-container">
                            <h1 className="card-heading">Crypto Tracker</h1>
                            <img className="card-image" src={this.state.crypto} />
                            <div className="card-image-btn-container">
                                <div onClick={() => this.handleCryptoApp(0)} className={this.state.cryptoImagePosition[0]}></div>
                                <div onClick={() => this.handleCryptoApp(1)} className={this.state.cryptoImagePosition[1]}></div>
                                <div onClick={() => this.handleCryptoApp(2)} className={this.state.cryptoImagePosition[2]}></div>
                            </div>
                            <div className="card-btn-container">
                                <a href="https://www.justinssoftware.com/CryptoTracker" className="card-btn">Demo</a>
                                <a href="https://github.com/jgoats/crypto-app-tailwind" className="card-btn">Code</a>
                            </div>
                        </section>
                    </div>
                    <div>
                        <div className="date-container">
                            <h1>9/9/2021</h1>
                            <h1>--</h1>
                            <h1>11/3/2021</h1>
                        </div>
                        <section className="card-container">
                            <h1 className="card-heading">Budget App</h1>
                            <img className="card-image" src={this.state.budget} />
                            <div className="card-image-btn-container">
                                <div onClick={() => this.handleBudgetApp(0)} className={this.state.budgetImagePosition[0]}></div>
                                <div onClick={() => this.handleBudgetApp(1)} className={this.state.budgetImagePosition[1]}></div>
                                <div onClick={() => this.handleBudgetApp(2)} className={this.state.budgetImagePosition[2]}></div>
                            </div>
                            <div className="card-btn-container">
                                <a href="https://justinssoftware.com/Budget/#/" className="card-btn">Demo</a>
                                <a href="https://github.com/jgoats/budget-frontend" className="card-btn">Code</a>
                            </div>
                        </section>
                    </div>
                    <div>
                        <div className="date-container">
                            <h1>8/17/2021</h1>
                            <h1>--</h1>
                            <h1>9/13/2021</h1>
                        </div>
                        <section className="card-container">
                            <h1 className="card-heading">JavaScript Blog</h1>
                            <img className="card-image" src={this.state.blog} />
                            <div className="card-image-btn-container">
                                <div onClick={() => this.handleBlog(0)} className={this.state.blogImagePosition[0]}></div>
                                <div onClick={() => this.handleBlog(1)} className={this.state.blogImagePosition[1]}></div>
                                <div onClick={() => this.handleBlog(2)} className={this.state.blogImagePosition[2]}></div>
                            </div>
                            <div className="card-btn-container">
                                <a href="https://justinssoftware.com/JavaScriptBlog/#/" className="card-btn">Demo</a>
                                <a href="https://github.com/jgoats/blog-frontend" className="card-btn">Code</a>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        )
    }
}
