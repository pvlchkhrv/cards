import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../m2-bll/store';
import {pingServerTC, restorePasswordTC} from '../../m2-bll/restore-password-reducer';
import RestorePassword from './RestorePassword';
import {Redirect} from 'react-router-dom';
import {PATH} from '../Routes';
import {RequestStatusType} from '../../m2-bll/app-reducer';

const RestorePasswordContainer: React.FC = () => {
    console.log('render Page')

    const appStatus = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.restorePassword.isRegistered);
    const errorMessage = useSelector<AppRootStateType, string>(state => state.restorePassword.errorMessage);
    const successMessage = useSelector<AppRootStateType, string>(state => state.restorePassword.successMessage);

    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    }
    const onClickHandler = () => {
        dispatch(restorePasswordTC(email));
        setEmail('')
    }
    if (isRegistered) return <Redirect to={PATH.SET_NEW_PASSWORD}/>
    return (
        <div>
            <RestorePassword onClick={onClickHandler}
                             onChange={onChangeHandler}
                             appStatus={appStatus}
                             errorMessage={errorMessage}
                             successMessage={successMessage}

            />
        </div>
    )
}

export default RestorePasswordContainer;
