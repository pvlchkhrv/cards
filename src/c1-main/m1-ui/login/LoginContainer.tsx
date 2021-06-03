import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Login from "./Login";
import {AppRootStateType} from "../../m2-bll/store";
import {getAuthUserData} from "../../m2-bll/login-reducer";
import {Redirect} from "react-router-dom";

type LoginContainerPropsType = {}

const LoginContainer: React.FC<LoginContainerPropsType> = (props: any) => {
    // const user = useSelector<AppRootStateType, {}>(state => state.login.user);
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth);

    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const onClickHandler = () => {
        dispatch(getAuthUserData(email, password, rememberMe))
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <Login onClick={onClickHandler}
                   onChangeEmail={setEmail}
                   onChangePassword={setPassword}
                   onChangeChecked={setRememberMe}
            />
        </div>
    )
}

export default LoginContainer;

