import React, { useState } from 'react'
import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { loginUser } from '../Redux/State/state.action';
const Login = (props) => {
    const [form,setForm] = useState({})

    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = () => {
        props.login(form)
    }

    return (
        <div className="login-container">
            <div className="form-container">
            <h1>Login</h1>
                <form onChange={changeHandler}>
                    <input type="email" name="email" placeholder="Email" required/>
                    <input type="password" name="password" placeholder="Password" required />
                    <Button variant="secondary" onClick={() => submitHandler()}>Login</Button>
                    <Button variant="danger" onClick={() => window.location = "/"}>Back</Button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login:(formData) => dispatch(loginUser(formData)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
