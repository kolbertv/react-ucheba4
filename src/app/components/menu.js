import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/menu.scss'


export default class Menu extends React.Component {
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
                            <div className={'navMenu__item ' + 'navMenu__item_active'}><Link exact to='/'>главная</Link>
                            </div>
                            <div className={'navMenu__item'}><Link to='/portfolio'>портфолио</Link></div>
                            <div className={'navMenu__item'}><Link to='/about'>о себе</Link></div>
                            <div className={'navMenu__item'}><Link to='/resume'>резюме</Link></div>
                            <div className={'navMenu__item'}><Link to='/blog'>блог</Link></div>
                            <div className={'navMenu__item'}><Link to='/contacts'>контакты</Link></div>
                        </nav>
                    </div>
                </div>
            </header>
        )

    }

}

