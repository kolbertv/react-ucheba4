import React from 'react';
import '../styles/main.scss'
import HeaderImage from '../components/header_image'

export default class Portfolio extends React.Component
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
