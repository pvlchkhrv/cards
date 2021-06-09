import React, {ChangeEvent} from 'react';
import InputText from "../common/input/InputText";
import Checkbox from "../common/checkbox/Checkbox";
import Button from "../common/button/Button";
import {LoginInitialStateType} from "../../m2-bll/login-reducer";
import {RequestStatusType} from "../../m2-bll/app-reducer";
import s from './Login.module.css'
import {NavLink} from 'react-router-dom';
import {PATH} from "../Routes";

type LoginPropsType = {
    title: string
    onChangeEmailHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangePasswordHandler: (e: ChangeEvent<HTMLInputElement>) => void
    addUserData: () => void
    onChangeRememberMeHandler: any         //(e: ChangeEvent<HTMLInputElement>) => void
    isAuth: LoginInitialStateType
    preloader: RequestStatusType
}

const Login: React.FC<LoginPropsType> = (props) => {
    return (
        <div className={s.login}>
            <h2 className={s.title}> LOGIN </h2>
            <span className={s.error}>{props.isAuth.errorMessage}</span>
            <form className={s.form}>
                <div>
                    <InputText type={'email'}
                               onChange={props.onChangeEmailHandler}
                               placeholder={'Email'}
                    />
                </div>
                <div>
                    <InputText type={'password'}
                               onChange={props.onChangePasswordHandler}
                               placeholder={'Password'}
                    />
                </div>
                <div>
                    <Checkbox type={'checkbox'}
                              onChangeChecked={props.onChangeRememberMeHandler}>remember me
                    </Checkbox>
                </div>
                <div>
                    <Button disabled={props.isAuth.loginButtonDisable}
                            className={s.loginBtn}
                            onClick={props.addUserData}>Submit</Button>
                </div>
            </form>
            <div>
                <NavLink className={s.reg} to={PATH.REGISTER}>Sign up</NavLink>
            </div>
        </div>
    )
}

export default Login;
