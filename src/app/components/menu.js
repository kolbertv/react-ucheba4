import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/menu.scss'

export default class Menu extends React.Component {

    isActive(href) {

        return ((window.location.pathname === href) ? 'navMenu__item_active': 'navMenu__item_inactive');

    }

    render() {
        return (
            <header className={'header'}>
                <img className={'header__img'} src="./img/code-200118-1200-630.jpg" alt=""/>
                <div className={'headerContainer'}>
                    <div className="headerContainer__headerLogo">
                        <img src="./img/logo-w.png" alt=""/>
                    </div>
                    <div className={'headerContainer__menu'}>
                        <nav className={'navMenu'}>
                            <div className={'navMenu__item ' + (this.isActive('/'))}><Link exact to='/'>главная</Link>
                            </div>
                            <div className={'navMenu__item ' + (this.isActive('/portfolio'))}><Link to='/portfolio'>портфолио</Link></div>
                            <div className={'navMenu__item ' + (this.isActive('/about'))}><Link to='/about'>о себе</Link></div>
                            <div className={'navMenu__item ' + (this.isActive('/resume'))}><Link to='/resume'>резюме</Link></div>
                            <div className={'navMenu__item ' + (this.isActive('/blog'))}><Link to='/blog'>блог</Link></div>
                            <div className={'navMenu__item ' + (this.isActive('/contacts'))}><Link to='/contacts'>контакты</Link></div>
                        </nav>
                    </div>
                </div>
            </header>
        )

    }

}

