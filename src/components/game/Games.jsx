import React, { } from 'react'
import Game from './Game';
import { Link } from 'react-router-dom';

function Games({ games }) {

    return (
        <div>
            <div className="games-list">
                {games.length > 0 ? games.map((game, index) => (
                    <Game
                        key={index}
                        name={game?.name}
                        genre={game?.genre}
                        id={game?.id}
                    />
                )) : ""}

                <button className="create-game">
                    <Link to="/games/new">Create New Game</Link>
                </button>
            </div>
        </div>
    )
}

export default Games