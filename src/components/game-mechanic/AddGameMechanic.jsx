import React, { useEffect, useState } from 'react'
import { AddGameMechanicApi, fetchAllGameMechanics } from '../../services/games.service';
import GameMechanics from './GameMechanics';

function AddGameMechanic() {
    const [gameMechanic, setMechanic] = useState('');
    const [gameMechanics, setGameMechanics] = useState([]);
    const [newMechanicAdded, setNewMechanicAdded] = useState(false);

    useEffect(() => {
        (async () => {
            const result = await fetchAllGameMechanics();
            setGameMechanics(result);
        })();
    }, [newMechanicAdded]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await AddGameMechanicApi({ gameMechanic });
        if (response?.statusCode.toUpperCase().startsWith("CREATED")) {
            setMechanic('');
            setNewMechanicAdded(true);
        }
    }

    return (
        <div>
            <form className="form-element">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="mechanic">Game Mechanic : </label>
                            </td>
                            <td>
                                <input type="text" className="mechanic"
                                    id="mechanic"
                                    onChange={e => { e.preventDefault(); setMechanic(e.target.value) }} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div className="submit-btn-container">
                                    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <section className="game-mechanics">
                <h2>Suggested Game Mechanics</h2>
                <GameMechanics gameMechanics={gameMechanics} />
            </section>
        </div>
    )
}

export default AddGameMechanic