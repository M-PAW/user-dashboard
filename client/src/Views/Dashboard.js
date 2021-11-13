import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../Redux/State/state.action';
import UserCard from '../Components/UserCard';

const Dashboard = () => {
    const {user} = useSelector(state => ({
        user:state.state.user
    }))

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser())
    },[])

    console.log(user);
    return (
        <div className='dashboard-container'>
            <UserCard user={user} />
        </div>
    )
}

export default Dashboard
