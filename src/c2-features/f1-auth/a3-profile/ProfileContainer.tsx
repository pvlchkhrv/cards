import React, {useEffect, useState} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../c1-main/m2-bll/store";
import {RequestStatusType} from "../../../c1-main/m2-bll/app-reducer";
import {authMe, changeProfile} from './profile-reducer';
import {logOut} from '../a1-login/login-reducer';
import {UserDataType} from '../../../c1-main/m2-bll/login-reducer';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../../c1-main/m1-ui/Routes';

export const ProfileContainer: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const {name, avatar, email} = useSelector<AppRootStateType, UserDataType>(state => state.profile.profile)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

    // const [nameValue, setNameValue] = useState(name);
    const [avatarValue, setAvatarValue] = useState(avatar);

    useEffect(() => {
        dispatch(authMe());
    }, [])

    if (!isAuth) {
        return <Redirect to={PATH.LOGIN}/>
    }

    const changeAvatarHandler = (avatarLink: string) => {
        setAvatarValue(avatarLink)
    }

    // const onChangeProfileName = (newName: string) => {
    //     setNameValue(newName)
    // }

    const onChangeNameHandler = (newName: string) => {
        dispatch(changeProfile(newName));
    }

    const onLogoutClickHandler = () => {
        dispatch(logOut());
    }

    return (
        <Profile
            nameValue={name}
            avatarValue={avatar}
            email={email}
            onAvatarChange={changeAvatarHandler}
            onNameChange={onChangeNameHandler}
            onLogoutClick={onLogoutClickHandler}
        />
    )
}
