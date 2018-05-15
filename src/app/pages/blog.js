import React from 'react';
import '../styles/main.scss';
import HeaderImage from '../components/header_image';
import Post from '../components/post';


export default class Blog extends React.Component {

    render() {
             return (

            <div className={'mainContainer'}>
                <HeaderImage/>

                <div className={'itemContainer'}>

                    <div className={'contentWrapper'}>

                        <h1>БЛОг Доброе пожаловать</h1>

                    </div>

                    <Post/>

                  </div>

            </div>

        )
    }

}
