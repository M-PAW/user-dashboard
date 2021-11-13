import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap';
import { updateUser } from '../Redux/State/state.action';

const EditProfile = (props) => {
    const [form,setForm] = useState({});

    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = () => {
        props.updateUser(form)
    }
    return (
        <div className='edit-profile-container'>
            <form onChange={changeHandler}>
                <input type="text" name="username" placeholder='Enter Name' required />
                <input type="text" name="profileImage" placeholder='Enter Profile Image URL'/>
                <textarea cols="20" row="16" name="description" placeholder='Enter Description' />
                <Button variant="secondary" onClick={() => submitHandler()}>Save</Button>
                    <Button variant="danger" onClick={() => window.location = "/dashboard"}>Cancel</Button>

            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user:state.state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser:(formData) => dispatch(updateUser(formData))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditProfile)
