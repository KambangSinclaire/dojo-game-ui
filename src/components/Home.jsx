import React from 'react'
import Register from './auth/Register'
import Login from './auth/Login'

function Home() {
    return (
        <div>
            <h2 className="home">Welcome to the Game Workshop</h2>
            <Register />
            <Login />
        </div>
    )
}

export default Home