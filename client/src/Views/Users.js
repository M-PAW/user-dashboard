import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../Redux/State/state.action'
import UserCard from '../Components/UserCard'

const Users = () => {
    const {user,users} = useSelector(state => ({
        user:state.state.user,
        users:state.state.users
    }))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    },[])

    return (
        <div className='users-container'>
            <h1>Users</h1>
            {
                users.map((otherUser,idx) => {
                    return (
                        <UserCard user={otherUser} key={idx}/>
                    )
                })
            }
        </div>
    )
}

export default Users
