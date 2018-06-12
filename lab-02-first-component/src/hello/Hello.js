import React, { Component } from 'react';

class Hello extends Component {

    constructor(props) {
        super(props);
        this.state = {
            greeting: 'Howdy!!',
        };
    }

   
    
    render() {
        return (
            <div className="hello">
                <h1>{this.state.greeting}</h1>
                <h2>{this.props.friend}</h2>
                <p> Congratulations! I am a React genius now</p>
            </div>
        );
    }
}

Hello.defaultProps = {
    friend: 'Friend!!',
};


export default Hello;