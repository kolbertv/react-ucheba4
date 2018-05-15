import React from 'react';
import '../styles/footer.scss'


export default class Footer extends React.Component {
    render() {
        return (
            <footer className={'footer'}>
                <div className={'footerContainer'}>
                    <h1>{this.props.children}</h1>
                </div>

            </footer>

        )
    }
}