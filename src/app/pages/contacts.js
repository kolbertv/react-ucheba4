import React from 'react';
import '../styles/main.scss'
import HeaderImage from '../components/header_image'


export default class Contacts extends React.Component {
    render() {
        return (

            <div className={'mainContainer'}>
                <HeaderImage/>
                <h3>Контакты</h3>
                <ul>
                    <li>Почта</li>
                    <li>Телефон</li>
                </ul>
            </div>

        )
    }

}
