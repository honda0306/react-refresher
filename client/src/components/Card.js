import React from 'react';

const Card = props => {
    const {
        name,
        height,
        hair_color,
        eye_color,
        birth_year,
        gender,
    } = props.character;

    return (
        <div className='card'>
            <h1 className='cardHeader'>
                {name}
            </h1>
            <div className='cardBody'>
                {/* <div className='cardRow'> */}
                    <p>Birthdate: {birth_year}</p>
                    <p>Gender: {gender}</p>
                    <p>Height: {height}</p>
                    <p>Hair Color: {hair_color}</p>
                    <p>Eye Color: {eye_color}</p>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Card;