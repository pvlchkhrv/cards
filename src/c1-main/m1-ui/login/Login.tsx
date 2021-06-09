import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import InputText from "../common/input/InputText";
import Checkbox from "../common/checkbox/Checkbox";
import Button from "../common/button/Button";
import {LoginInitialStateType} from "../../m2-bll/login-reducer";
import {RequestStatusType} from "../../m2-bll/app-reducer";

type LoginPropsType = {
    title: string
    onChangeEmailHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangePasswordHandler: (e: ChangeEvent<HTMLInputElement>) => void
    addUserData: () => void
    onChangeRememberMeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    isAuth: LoginInitialStateType
    preloader: RequestStatusType
}

const Login: React.FC<LoginPropsType> = (props) => {
    return (
        <div>
            <h3> LOGIN </h3>
            <div>
                <InputText type={'email'}
                           placeholder={'Enter email'}
                           onChangeText={onChangeEmail}
                />
            </div>
            <div>
                <InputText type={'password'}
                           placeholder={'Enter password'}
                           onChangeText={onChangePassword}
                />
            </div>
            <div>
                <Checkbox onChangeChecked={onChangeChecked}>remember me</Checkbox>
            </div>
            <div><Button onClick={onClick}>Submit</Button></div>
        </div>
    )
}

export default Login;
