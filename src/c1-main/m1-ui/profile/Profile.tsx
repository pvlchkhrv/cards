import React from 'react';
import s from './Profile.module.css'
import Login from "../login/Login";

type ProfilePropsType = {
    userData: string
}

const Profile: React.FC<ProfilePropsType> = ({userData}) => {
    return (
        <div className={s.main}>
            <div>{JSON.stringify(userData)}</div>

            <button><Login/></button>
        </div>
    )
}

export default Profile;
