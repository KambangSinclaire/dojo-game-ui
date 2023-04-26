import React from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const handler = (e) => {
        e.preventDefault();
        navigate("/home");
    }

    return (
        <div className='register-form'>
            <form className="form-element">
                <table>
                    <tbody>
                        <tr>
                            <th colSpan="2">
                                <h3 className="form-title">Register</h3>
                            </th>
                        </tr>
                        <tr>
                            <td><label htmlFor="username">Username</label></td>
                            <td><input type="username" id='l-username' className="username" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td><input type="email" id='email' className="email" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td> <input type="password" id='password' className="password" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="c-password">confirm Password</label></td>
                            <td> <input type="c-password" id='l-c-password' className="c-password" /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div className="submit-btn-container">
                                    <button className="submit-btn" onClick={handler}>Register</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

        </div>
    )
}

export default Register