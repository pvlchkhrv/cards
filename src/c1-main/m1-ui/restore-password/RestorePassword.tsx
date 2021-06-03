import React, {ChangeEvent} from 'react';
import InputText from '../common/input/InputText';
import Button from '../common/button/Button';
import {RequestStatusType} from '../../m2-bll/app-reducer';

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
            <div>Restore Password Page</div>
            <div>
                <div>
                    <InputText type="text" onChange={onChange}/>
                </div>
                <div>
                    <Button onClick={onClick} disabled={appStatus === 'loading'}>Restore</Button>
                </div>
                {appStatus === 'loading' && <div>Loading...</div>}
                {appStatus === 'failed' && <div>{errorMessage}</div>}
                {appStatus === 'succeed' && <div>{successMessage}</div>}
            </div>
        </div>
    )
}

export default RestorePassword;
