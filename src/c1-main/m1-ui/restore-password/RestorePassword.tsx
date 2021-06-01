import React, {ChangeEvent} from 'react';
import InputText from '../common/input/InputText';
import Button from '../common/button/Button';
import {Redirect} from 'react-router-dom';
import {PATH} from '../Routes';

interface IForgotProps {
    onClick: () => void
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    isError: boolean
    isRegistered: boolean
    errorMessage: string
    successMessage: string
}

const RestorePassword: React.FC<IForgotProps> = (
    {
        onClick,
        onChange,
        isError,
        isRegistered,
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
                    <Button onClick={onClick}>Restore</Button>
                </div>
                {isError && <div>{errorMessage}</div>}
                {isRegistered && <div>{successMessage}</div>}
            </div>
        </div>
    )
}

export default RestorePassword;
