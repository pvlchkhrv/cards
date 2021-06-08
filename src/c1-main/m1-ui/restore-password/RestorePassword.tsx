import React, {ChangeEvent} from 'react';
import {RequestStatusType} from '../../m2-bll/app-reducer';
import {RestorePasswordForm} from './RestorePasswordForm';

interface IForgotProps {
    onClick: () => void
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    appStatus: RequestStatusType
    errorMessage: string
    successMessage: string
}

const RestorePassword: React.FC<IForgotProps> = (
    {
        onClick,
        onChange,
        appStatus,
        errorMessage,
        successMessage
    }
) => {
    console.log('render PageFrom')
    return (
        <div>
            <h1>Restore Password Page</h1>
            <div>
                <RestorePasswordForm onClick={onClick}
                                     onChange={onChange}
                />
                {appStatus === 'loading' && <div>Loading...</div>}
                {appStatus === 'failed' && <div>{errorMessage}</div>}
                {appStatus === 'succeed' && <div>{successMessage}</div>}
            </div>
        </div>
    )
}

export default RestorePassword;


