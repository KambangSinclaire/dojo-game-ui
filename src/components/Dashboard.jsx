import React, { useEffect, useState } from 'react'
import Games from './game/Games'
import { fetchAllGames } from '../services/games.service';
import { Link } from 'react-router-dom';

function Dashboard() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await fetchAllGames();
            setGames(result);
        })();
    }, []);

    return (
        <div>
            <header>
                <h2>Welcome, Kambang!</h2>
                <p className="sub-title"> <Link to="/">Logout</Link></p>
            </header>
            <section className="game-section">
                <h3>Current Games</h3>
                <hr></hr>
                <Games games={games} />
            </section>
        </div>
    )
}

export default Dashboard