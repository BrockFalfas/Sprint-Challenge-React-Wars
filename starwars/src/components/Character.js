import React from "react";

const Character = props => {
    return (
        <div className="character-card">

        <h1 className="color">Name: {props.name}</h1>
        <h4>Height: {props.height}</h4>
        <h4>Mass: {props.mass}</h4>
        <h4>HairColor: {props.hairColor === 'n/a' || props.hairColor === 'none' ? 'no hair color'
        : `${props.hairColor} hair color`}
        </h4>

        </div>
    )
}

export default Character;