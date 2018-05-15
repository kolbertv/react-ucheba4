import React from 'react';
import '../styles/main.scss'
import axios from 'axios';


export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            users: []
        };

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=> [
                this.setState({
                    posts:response.data
                })
            ]);

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=> [
                this.setState({
                    users:response.data
                })
            ])
    }


    render() {

        console.log(this.state.posts);
        console.log(this.state.users);

          return (

                    <div className={'contentWrapper'}>
                        <h3>Главная Доброе пожаловать</h3>

                    </div>


        )
    }

}
