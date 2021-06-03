import React, {Dispatch, SetStateAction} from 'react';
import InputText from "../common/input/InputText";
import Checkbox from "../common/checkbox/Checkbox";
import Button from "../common/button/Button";

type LoginPropsType = {
    onClick: () => void,
    onChangeEmail: any                 //Dispatch<SetStateAction<string>>
    onChangePassword: any                 //Dispatch<SetStateAction<string>>
    onChangeChecked: any                //Dispatch<SetStateAction<boolean>>
}

const Login: React.FC<LoginPropsType> = (
    {
        onClick,
        onChangeEmail,
        onChangePassword,
        onChangeChecked
    }
) => {
    return (
        <div>
            <h3> LOGIN </h3>
            <div>
                <InputText type={'email'}
                           placeholder={'Enter email'}
                           onChange={onChangeEmail}
                />
            </div>
            <div>
                <InputText type={'password'}
                           placeholder={'Enter password'}
                           onChange={onChangePassword}
                />
            </div>
            <div>
                <Checkbox onChangeChecked={onChangeChecked}>remember me</Checkbox>
            </div>
            <div><Button onClick={onClick}>Submit</Button></div>
        </div>
    )
}

export default Login;
