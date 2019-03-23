import React from 'react';
import Card from './Card';
import './swapi.css';

const Container = props => {
    return (
        <div className="card-container">
            {props.characters.map(character => <Card character ={character} />)}
        </div>
    )
}

export default Container;