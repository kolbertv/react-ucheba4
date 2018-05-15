import React from 'react';
import '../styles/main.scss'
import HeaderImage from '../components/header_image'

export default class Resume extends React.Component
{
    render () {
        return (

            <div className={'mainContainer'}>
                <HeaderImage/>

                <h1>Резюме</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, rem.</p>
            </div>

        )
    }

}
