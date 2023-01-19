import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Login from "./Login";
import About from "./About";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
             <h1>The Twisted Crab</h1>
             <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
            <div className="content">
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/menu" element={<Menu />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
            </div>
        </div>
        </HashRouter>
        );
    }
}
export default Main;