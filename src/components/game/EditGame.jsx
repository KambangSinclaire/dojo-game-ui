import React, { useEffect, useState } from 'react'
import { EditGameApi, fetchGameById } from '../../services/games.service';
import { Link, useLocation } from 'react-router-dom';

function EditGame() {

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescrition] = useState('');
    const [message, setMessage] = useState('');
    const location = useLocation();


    useEffect(() => {
        (async () => {
            const result = await fetchGameById(location.state);
            setName(result?.name);
            setGenre(result?.genre);
            setDescrition(result?.description);
        })();
    }, [location]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await EditGameApi({ name, genre, description, id: location.state });
        setMessage(response.message);

        if (response?.statusCode.toUpperCase().startsWith("CREATED")) {
            setName('');
            setDescrition('');
            setGenre('');
        }
    }

    return (
        <div className='add-game-form'>
            <h1 className="form-title">Edit Game</h1>
            <p className="sub-title"><Link to="/home">Dashboard</Link></p>
            <p className="sub-title">{message}</p>
            <form className="form-element">
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="name">Name</label></td>
                            <td>
                                <input type="email" id="name" value={name}
                                    className="name" onChange={e => { e.preventDefault(); setName(e.target.value) }} />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="genre">Genre</label></td>
                            <td>
                                <input type="text" id="genre" value={genre}
                                    className="genre" onChange={e => { e.preventDefault(); setGenre(e.target.value) }} />
                            </td>
                        </tr>

                        <tr>
                            <td><label htmlFor="description">Description</label></td>
                            <td>
                                <textarea name="description" value={description} placeholder='description'
                                    onChange={e => { e.preventDefault(); setDescrition(e.target.value) }}
                                    id="description" cols="30" rows="10">
                                </textarea>
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
        </div>
    )
}

export default EditGame