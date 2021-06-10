import NewPassword from "./NewPassword";
import {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import {RequestStatusType} from "../../m2-bll/app-reducer";
import {Redirect, useParams} from "react-router-dom";
import {setNewPasswordTC} from "../../m2-bll/new-password-reducer";

export const NewPasswordContainer = () => {

    const [newPassword, setNewPassword] = useState("")
    const [isChecked, setIsChek] = useState(false)

    const requestStatus = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const error = useSelector<AppRootStateType, string>(state => state.newPassword.error)
    const isSuccessful = useSelector<AppRootStateType, boolean>(state => state.newPassword.isSuccessful)

    const {token} = useParams<{ token: string }>()

    const dispatch = useDispatch()

    const onChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.currentTarget.value)
    }
    const viewPassword = () => {
        setIsChek(!isChecked)
    }
    const onSubmit = () => {
        dispatch(setNewPasswordTC(newPassword, token))
    }

    if (isSuccessful) {
        return <Redirect to={'PATH.LOGIN'}/>
    }

    return (
        <div>
            <NewPassword
                error={error}
                isChecked={isChecked}
                requestStatus={requestStatus}
                onChangeNewPassword={onChangeNewPassword}
                onSubmit={onSubmit}
                viewPassword={viewPassword}
            />
        </div>
    )
}