import React from 'react';
import '../styles/header_image.scss';

export default class HeaderImage extends React.Component {

    render () {

        return (

            <div className={'headerImageContainer'}>

                <img className={'headerImageContainer__img'} src="./img/code-200118-1200-630.jpg" alt="тут должна быть картинка"/>

            </div>

        )
    }


}

