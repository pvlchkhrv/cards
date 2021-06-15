import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Login from "./Login";
import {AppRootStateType} from "../../m2-bll/store";
import {getAuthUserData, LoginInitialStateType, setErrorMessageAC} from "../../m2-bll/login-reducer";
import {Redirect} from "react-router-dom";
import {RequestStatusType} from "../../m2-bll/app-reducer";
import {PATH} from "../Routes";

type LoginContainerPropsType = {}

const LoginContainer: React.FC<LoginContainerPropsType> = (props: any) => {

    const isAuth = useSelector<AppRootStateType, LoginInitialStateType>(state => state.login);
    const loading = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);

    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>('panich2303@gmail.com');
    const [password, setPassword] = useState<string>('1234567');
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    useEffect(() => {
        dispatch(setErrorMessageAC(''))
    }, [email, password])

    if (isAuth.user !== null) {
        return <Redirect to={PATH.PROFILE}/>
    }

    const addUserData = () => {
        dispatch(getAuthUserData(email, password, rememberMe))
    }
    const addNewEmail = (newEmail: string) => {
        setEmail(newEmail)
    }
    const addNewPassword = (newPassword: string) => {
        setPassword(newPassword)
    }
    // const changeRememberMe = (newValue: boolean) => {
    //     setRememberMe(newValue)
    // }

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        addNewEmail(e.currentTarget.value)
    }
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        addNewPassword(e.currentTarget.value)
    }
    // const onChangeRememberMeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     changeRememberMe(e.currentTarget.checked)
    // }

    return (
        <Login
            title="Log in"
            onChangeEmailHandler={onChangeEmailHandler}
            onChangePasswordHandler={onChangePasswordHandler}
            addUserData={addUserData}
            onChangeRememberMeHandler={setRememberMe}
            isAuth={isAuth}
            preloader={loading}
        />
    )
}

export default LoginContainer;

