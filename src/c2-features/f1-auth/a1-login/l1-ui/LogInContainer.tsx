import React from 'react';
import LogIn from './LogIn';

type LoginContainerPropsType = {

}

const LoginContainer: React.FC<LoginContainerPropsType> = (props: any) => {
    return (
        <div>
            <LogIn/>
        </div>
    )
}

export default LoginContainer;