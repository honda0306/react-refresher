import React, { Component } from 'react';

class Avengers extends Component {
    constructor() {
        super();
        this.state = {
            avengers: ['Iron Man', 'Hawkeye', 'Black Widow', 'Black Panther', 'Chris Pratt']
        };
    }
    render() {
        return (
            <div>
                {this.state.avengers.map(avenger => <div key={avenger}>{avenger}</div>)}
            </div>
        );
    }
}

export default Avengers;