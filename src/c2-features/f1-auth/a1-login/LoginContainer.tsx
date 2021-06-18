import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "../../../c1-main/m2-bll/store";
import {getAuthUserData} from "./login-reducer";
import {Redirect} from "react-router-dom";
import {AppInitialStateType} from "../../../c1-main/m2-bll/app-reducer";
import {PATH} from "../../../c1-main/m1-ui/Routes";
import {Login} from './Login';


const LoginContainer: React.FC<{}> = () => {

    const {isAuth, status, errorMessage, successMessage} = useSelector<AppRootStateType, AppInitialStateType>(state => state.app);
    const dispatch = useDispatch();

    const onSubmitHandler = (email: string, password: string, rememberMe: boolean) => {
        dispatch(getAuthUserData(email, password, rememberMe));
    }
    if(isAuth) {
        return <Redirect to={PATH.PROFILE}/>;
    }
    return (
        <Login onSubmitHandler={onSubmitHandler}/>
    )
}

export default LoginContainer;
