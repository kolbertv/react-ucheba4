import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import './app/styles/index.scss'

import Layout from './app/layouts/layout'

const app = document.getElementById('app');


ReactDOM.render(
    <BrowserRouter>
        <Layout/>
    </BrowserRouter>

    , app);
