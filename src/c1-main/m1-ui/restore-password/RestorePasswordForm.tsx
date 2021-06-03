import React, {ChangeEvent} from 'react';
import InputText from '../common/input/InputText';
import Button from '../common/button/Button';

interface RestorePasswordFormPropsType {
    onClick: () => void
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const RestorePasswordForm: React.FC<RestorePasswordFormPropsType> = ({onClick, onChange}) => {

    return (
        <form action="" onSubmit={onClick}>
            <div>
                <InputText type="text" onChange={onChange}/>
            </div>
            <div>
                <Button type={'submit'}>Restore</Button>
            </div>
        </form>
    )
}
