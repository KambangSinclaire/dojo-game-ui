import React from 'react'
import { NavLink } from 'react-router-dom'

function Game({ name, genre, id }) {
    return (
        <div>
            <p>
                <NavLink to={`/games/${id}`} state={id}>{name}</NavLink>
            </p>
            <strong>Genre : </strong>
            <span>{genre}</span>
        </div>
    )
}

export default Game