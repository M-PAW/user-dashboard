import React from 'react'
import blankUser from '../assets/blank-profile.png';

const UserCard = ({user}) => {

    const onClickHandler = () => {
        window.location = `/profile/${user.userId}`
    }

    return (
        <div className='user-card-container'>
        <h2>{user.username}</h2>
        <img src={`${user.profileImage!==''?user.profileImage:blankUser}`} alt={user.username} />
        <p>{user.description.length>2?user.description:"Update Your Description"}</p>
    </div>
    )
}

export default UserCard
