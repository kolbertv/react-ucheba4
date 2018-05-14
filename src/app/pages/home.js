import React from 'react';
import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import Blog from "./blog";
import Contacts from "./contacts";
import About from "./about";
import Resume from "./resume";
import Portfolio from "./portfolio";


export default class Home extends React.Component
{
    render () {
        return (
            <main>
                <div className="titleimg">
                    {/*<img src="../img/bigfoto.jpg" alt=""/>*/}
                </div>

                <h1>Главная Доброе пожаловать</h1>
            </main>
        )
    }

}
