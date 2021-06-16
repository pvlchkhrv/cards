import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {registrationThunk} from "../../m2-bll/register-reducer";
import {AppRootStateType} from "../../m2-bll/store";
import Register from "./Register";

const RegisterContainer: React.FC = () => {
    console.log('render Container')
    let isRegister = useSelector((state: AppRootStateType) => state.register.isRegister)
    let isErrorMessage = useSelector((state: AppRootStateType) => state.register.isErrorMessage)
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