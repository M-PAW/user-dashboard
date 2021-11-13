import React from 'react'
import {Button} from 'react-bootstrap';
const Landing = () => {
    return (
        <div className='landing-container'>
            <h1>User Dashboard</h1>
            <div className="button-group">
                <h2>Login or Register</h2>
                <hr/>
                <Button variant='primary' onClick={() => window.location="/login"}>Login</Button>
                <Button variant='secondary' onClick={() => window.location="/register"}>Register</Button>
            </div>
        </div>
    )
}

export default Landing
