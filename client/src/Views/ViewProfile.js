import React,{useState, useEffect} from 'react'

const ViewProfile = ({match}) => {
    const [userView,setUserView] = useState({})

    const findUser = () => {
        const userId = match.parans.id;
        console.log(userId);
    }
    useEffect(() => {
        findUser()
    },[])
    return (
        <div>
            
        </div>
    )
}

export default ViewProfile;
