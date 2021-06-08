import React, {ChangeEvent, useEffect, useState} from 'react';
import {PATH} from "../Routes";
import {Redirect} from 'react-router-dom';

interface RegisterProps {
    onClick: () => void
    onChangeMail: (e: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
    isRegister: boolean
    isErrorMessage: string
    mail: string
    password: string
}

const Register: React.FC<RegisterProps> = (
    {
        onClick,
        onChangeMail,
        onChangePassword,
        isRegister,
        isErrorMessage,
        mail,
        password,
    }
) => {

    return (
        <div>
            MY REGISTER PAGE
            <div>
                <div>
                    <input value={mail} type="text" placeholder="E-mail" onChange={onChangeMail}/>
                </div>
                <div>
                    <input value={password} type="password" placeholder="Password" onChange={onChangePassword}/>
                </div>
            </div>
            <button onClick={onClick}>Sign Up</button>
            {isRegister ? <Redirect to={PATH.LOGIN}/> : <div>{isErrorMessage}</div>}
        </div>
    )
}

export default Register;
