import React from 'react';
import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import Blog from "./blog";
import Contacts from "./contacts";
import About from "./about";
import Resume from "./resume";
import Portfolio from "./portfolio";
import '../styles/main.scss'

import HeaderImage from '../components/header_image'


export default class Home extends React.Component
{
    render () {
        return (
            <div className={'mainContainer'}>
                <HeaderImage/>

                <div className={'itemContainer'}>

                    <div className={'contentWrapper'}>
                        <h1>Главная Доброе пожаловать</h1>

                    </div>

                </div>


            </div>
        )
    }

}
