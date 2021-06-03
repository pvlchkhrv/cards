import React, {ChangeEvent, useEffect, useState} from 'react';
import InputText from "../common/input/InputText";
import Button from "../common/button/Button";
import {authAPI} from '../../m3-dall/instance';
import {useDispatch, useSelector} from "react-redux";
import {AuthInitialStateType, registrationThunk} from "../../m2-bll/register-reducer";
import {AppRootStateStateType} from "../../m2-bll/store";
import {PATH} from "../Routes";
import {Redirect} from 'react-router-dom';
import Register from "./Register";

const RegisterContainer: React.FC = () => {
    console.log('render Container')
    let isRegister = useSelector((state: AppRootStateStateType) => state.register.isRegister)
    let isErrorMessage = useSelector((state: AppRootStateStateType) => state.register.isErrorMessage)
    const dispatch = useDispatch()
    const [mail, setMail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const onChangeMail = (e: ChangeEvent<HTMLInputElement>) => {
        setMail(e.currentTarget.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const onChangeHandler = () => {
        dispatch(registrationThunk(mail, password))

    }
    return (
        <div>
            <Register onClick={onChangeHandler}
                      onChangeMail={onChangeMail}
                      onChangePassword={onChangePassword}
                      isRegister={isRegister}
                      isErrorMessage={isErrorMessage}
                      mail={mail}
                      password={password}
            />
        </div>
    )
}

export default RegisterContainer;
