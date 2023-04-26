import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { fetchGameById } from '../../services/games.service';
import AddGameMechanic from '../game-mechanic/AddGameMechanic';

function GameDetails() {
    const location = useLocation();
    const [game, setGame] = useState(null);

    useEffect(() => {
        (async () => {
            const result = await fetchGameById(location.state);
            setGame(result);
        })();
    }, [location]);
    return (
        <div>
            <div className="game-info">
                <h2><p>{game?.name}</p></h2>
                <p><Link to="/home">Dashboard</Link></p> <br />
                <p> <strong>Name : </strong> {game?.name}</p>
                <p> <strong>Genre : </strong>{game?.genre}</p>
                <p> <strong>Description : </strong>{game?.description}</p>

                <p><Link to={`/games/${game?.id ?? location.state}/edit`} state={location.state}>Edit</Link></p>
                <p><Link to="/home">Delete</Link></p>
            </div>
            <AddGameMechanic />
        </div>
    )
}

export default GameDetails