import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const handler = (e) => {
        e.preventDefault();
        navigate("/home");
    }


    return (
        <div className='login-form'>
            <form className="form-element">
                <table>
                    <tbody>
                        <tr>
                            <th colSpan="2">
                                <h3 className="form-title">Login</h3>
                            </th>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td><input type="email" id='l-email' className="email" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td> <input type="password" id='l-password' className="password" /></td>
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

export default Login