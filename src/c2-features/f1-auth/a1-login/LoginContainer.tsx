import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "../../../c1-main/m2-bll/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../c1-main/m1-ui/Routes";
import {Login} from './Login';
import {logIn} from './login-reducer';

const LoginContainer: React.FC<{}> = () => {

    const isLogged = useSelector<AppRootStateType, boolean>(state => state.login.isLogged);
    const dispatch = useDispatch();

    const onSubmitHandler = (email: string, password: string, rememberMe: boolean) => {
        dispatch(logIn(email, password, rememberMe));
    }
    if (isLogged) {
        return <Redirect to={PATH.PROFILE}/>;
    }

    return (
        <Login onSubmitHandler={onSubmitHandler}/>
    )
}

export default LoginContainer;
