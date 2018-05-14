import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Home from "../pages/home";
import Footer from "../components/footer";
import Blog from "../pages/blog";
import Contacts from "../pages/contacts";
import About from "../pages/about";
import Resume from "../pages/resume";
import Portfolio from "../pages/portfolio";
import Menu from "../components/menu";
import '../styles/layout.scss'


export default class Layout extends React.Component {
    render() {
        return (
            <div className={'mainContainer'}>
                <Menu/>
                <main className={'main'}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/portfolio' component={Portfolio}/>
                        <Route path='/about' component={About}/>
                        <Route path='/resume' component={Resume}/>
                        <Route path='/blog' component={Blog}/>
                        <Route path='/contacts' component={Contacts}/>
                        <Route render={() => <h1>Page not found</h1>}/>
                    </Switch>
                </main>
                <Footer>Подвал</Footer>
            </div>
        )

    }

}

