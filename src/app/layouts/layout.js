import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Home from "../components/home";
import Footer from "../components/footer";
import Blog from "../components/blog";
import Contacts from "../components/contacts";
import About from "../components/about";
import Resume from "../components/resume";
import Portfolio from "../components/portfolio";
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

