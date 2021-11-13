import React, { useState } from 'react'
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { registerUser } from '../Redux/State/state.action';

const Register = (props) => {
    const [form,setForm] = useState({})

    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = () => {
        props.register(form)
    }

    return (
        <div className="register-container">
            <div className="form-container">
            <h1>Register</h1>
                <form onChange={changeHandler}>
                    <input type="email" id="email" name="email" placeholder="Email" required/>
                    <input type="text" name="username" placeholder="Username" required />
                    <input type="password" name="password" placeholder="Password" required />
                    {/* <input type="password" name="passwordConfirm" placeholder="Confirm Password" require /> */}
                    <Button variant="secondary" onClick={() => submitHandler()}>Register</Button>
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
        register:(formData) => dispatch(registerUser(formData))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);
