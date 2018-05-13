import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import './app/styles/index.scss'

import Layout from './app/layouts/layout'
import Blog from "./app/components/blog";
import Contacts from "./app/components/contacts";
import Home from "./app/components/home";
import About from "./app/components/about";
import Resume from "./app/components/resume";
import Portfolio from "./app/components/portfolio";
import Footer from "./app/components/footer";

const app = document.getElementById('app');


ReactDOM.render(
    <BrowserRouter>
        <Layout/>
    </BrowserRouter>

    , app);
