import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../c1-main/m2-bll/store";
import {changeProfile} from './profile-reducer';
import {authMe, logOut} from '../a1-login/login-reducer';
import {UserDataType} from '../../../c1-main/m2-bll/login-reducer';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../../c1-main/m1-ui/Routes';

export const ProfileContainer: React.FC<{}> = React.memo(() => {
        const dispatch = useDispatch();
        const profile = useSelector<AppRootStateType, UserDataType>(state => state.profile.profile)
        const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth)
        const isLogged = useSelector<AppRootStateType, boolean>(state => state.login.isLogged)

        useEffect(() => {
            if (!profile._id) {
                dispatch(authMe())
            }
        }, [])

        const onChangeNameHandler = (newName: string) => {
            dispatch(changeProfile(newName));
        }

        const onLogoutClickHandler = () => {
            dispatch(logOut());
        }

        // if(!) {
        //     return <Redirect to={PATH.LOGIN}/>
        // }
        return (
            <Profile
                nameValue={profile.name}
                avatarValue={profile.avatar}
                email={profile.email}
                packsCount={profile.publicCardPacksCount}
                onNameChange={onChangeNameHandler}
                onLogoutClick={onLogoutClickHandler}
            />
        )
    }
)
