import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import {ProfileDataType} from "../../m3-dal/profileAPI";
import {PATH} from "../Routes";
import { Redirect } from "react-router-dom";
import {getAuthUserData, LoginInitialStateType} from "../../m2-bll/login-reducer";
import {checkDataUserTC} from "../../m2-bll/profile-reducer";


type ProfileContainerPropsType = {}

export const ProfileContainer: React.FC<ProfileContainerPropsType> = (props) => {

    const dispatch = useDispatch();

    const userData = useSelector<AppRootStateType, ProfileDataType>(state => state.profile)
    const isAuth = useSelector<AppRootStateType, LoginInitialStateType>(state => state.login)

    useEffect(() => {
        if (!userData.created) {
            dispatch(checkDataUserTC());
        }
    }, [])

    if (!isAuth) {
        return <Redirect to={PATH.LOGIN} />
    }

    return (
        <Profile userData={userData}/>
    )
}