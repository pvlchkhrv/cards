import React from 'react';
import s from './Profile.module.css'
import Button from '../common/button/Button';

type ProfilePropsType = {
    auth: any
    editMode: any
    changeAvatarHandler: any
    changeNameInputFocus: any
    switchEditMode: any
    onChangeNewNameHandler: any
    setNewName: any
    logOut: any
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 auth,
                                                 editMode,
                                                 changeAvatarHandler,
                                                 changeNameInputFocus,
                                                 switchEditMode,
                                                 onChangeNewNameHandler,
                                                 setNewName,
                                                 logOut
                                             }) => {
    return (
        <div className={s.main}>

            avatar:<img src={auth.dataUser?.avatar}/>
            <button onClick={changeAvatarHandler}>change image</button>

            {editMode

                ? <input autoFocus onBlur={changeNameInputFocus}
                         onChange={onChangeNewNameHandler}
                />

                : <span onDoubleClick={switchEditMode}> name: {auth.dataUser?.name}</span>
            }

            <p>token:{auth.dataUser?.token}</p>
            <p>email:{auth.dataUser?.email}</p>

            <Button className={s.loginBtn}
                         onClick={logOut}>Log out
            </Button>
        </div>
    )
}

export default Profile;
