import React, {ChangeEvent, useEffect, useState} from 'react';
import InputText from "../common/input/InputText";
import Button from "../common/button/Button";
import {authAPI} from '../../m3-dall/instance';
import {useDispatch, useSelector} from "react-redux";
import {AuthInitialStateType, registrationThunk} from "../../m2-bll/register-reducer";
import {AppRootStateStateType} from "../../m2-bll/store";
import {PATH} from "../Routes";
import {Redirect} from 'react-router-dom';

const Register: React.FC = () => {

    let isRegister = useSelector((state: AppRootStateStateType) => state.register.isRegister)
    let isErrorMessage = useSelector((state: AppRootStateStateType) => state.register.isErrorMessage)
    const dispatch = useDispatch()
    const [mail, setMail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const changeMail = (e: ChangeEvent<HTMLInputElement>) => {
        setMail(e.currentTarget.value)
    }
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const clickButton = () => {
        dispatch(registrationThunk(mail, password))

    }
    return (
        <div>
            MY REGISTER PAGE
            <div>
                <div>
                    <input value={mail} type="text" placeholder="E-mail" onChange={changeMail}/>
                </div>
                <div>
                    <input value={password} type="password" placeholder="Password" onChange={changePassword}/>
                </div>
            </div>
            <button onClick={clickButton}>Sign Up</button>
            {isRegister ? <Redirect to={PATH.LOGIN}/> : <div>{isErrorMessage}</div>}
        </div>
    )
}

export default Register;
