import React, {ChangeEvent, useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import {PATH} from "../Routes";
import {Redirect} from "react-router-dom";
import {LoginInitialStateType, logOutTC} from "../../m2-bll/login-reducer";
import {authTC, changeAvatarProfileTC, changeNameProfileTC, ProfileDataType} from "../../m2-bll/profile-reducer";
import {useState} from "react";
import {RequestStatusType} from "../../m2-bll/app-reducer";


type ProfileContainerPropsType = {}

export const ProfileContainer: React.FC<ProfileContainerPropsType> = (props) => {

    const dispatch = useDispatch();

    // const userData = useSelector<AppRootStateType, ProfileDataType>(state => state.profile)
    const auth = useSelector<AppRootStateType, LoginInitialStateType>(state => state.login)
    const loading = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState('')

    useEffect(() => {
        if (!auth.user?.created) {
            dispatch(authTC());
        }
    }, [])

    if (!auth.user?.created) {
        return <Redirect to={PATH.LOGIN}/>
    }

    const changeAvatarHandler = () => {
        dispatch(changeAvatarProfileTC('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLZCQKk9AAsrHRGSrOciC3AdPFdncKU8bwYFDDJSvFrmbgIWDXgIWykL541TCARJ7sMPE&usqp=CAU')) ///загрузка аватара
    }

    const changeNameInputFocus = () => {
        setEditMode(false)
        dispatch(changeNameProfileTC(name))
    }
    const switchEditMode = () => {
        setEditMode(true)
    }

    const setNewName = (newName: string) => {
        setName(newName)
    }
    const onChangeNewNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.currentTarget.value)
    }

    const logOut = () => {
        dispatch(logOutTC())
    }

    return (
        <Profile
            auth={auth}
            editMode={editMode}
            changeAvatarHandler={changeAvatarHandler}
            changeNameInputFocus={changeNameInputFocus}
            switchEditMode={switchEditMode}
            onChangeNewNameHandler={onChangeNewNameHandler}
            setNewName={setNewName}
            logOut={logOut}
        />
    )
}
