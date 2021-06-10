import React, {ChangeEvent} from 'react';
import {RequestStatusType} from "../../m2-bll/app-reducer";
// import {Simulate} from "react-dom/test-utils";
// import error = Simulate.error;
import InputText from "../common/input/InputText";
import Button from '../common/button/Button';
import s from './NewPassword.module.css';
import chrome from '../common/images/chrome.jpg'

type NewPasswordPropsType = {
    error: string
    isChecked: boolean
    requestStatus: RequestStatusType
    onChangeNewPassword: (e: ChangeEvent<HTMLInputElement>) => void
    onSubmit: () => void
    viewPassword: () => void
}

const NewPassword: React.FC<NewPasswordPropsType> = ({
                                                         error, isChecked, requestStatus,
                                                         onChangeNewPassword, onSubmit, viewPassword
                                                     }) => {

    return (
        <div className={s.set}>
            <div className={s.card}>
                {/*<img className={s.logo} src={chrome} alt="logo"/>*/}

                <h2 className={s.title}>Create new password</h2>

                <form className={s.form}>

                    <div className={s.error}>
                        {error && <span>{error}</span>}
                        {requestStatus === "loading" && <span>loading...</span>}
                    </div>
                    <InputText
                        type={isChecked ? "text" : "password"}
                        onChange={onChangeNewPassword}
                        placeholder={"Password"}
                    />
                    <span onClick={viewPassword}>View password</span>
                    <div>
                        <span className={s.text}>Create new password</span>
                    </div>

                    <Button
                        disabled={requestStatus === "loading"}
                        className={s.button}
                        onClick={onSubmit}>Create new password</Button>
                </form>
            </div>
        </div>
    )
}

export default NewPassword;
