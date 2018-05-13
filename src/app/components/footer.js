import React from 'react';


export default class Footer extends React.Component {
    render() {
        return (
            <footer className={'footer'}>
                <h1>{this.props.children}</h1>
            </footer>

        )
    }
}