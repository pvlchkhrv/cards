import React from 'react';
import Login from "./Login";

type LoginContainerPropsType = {

}

const LoginContainer: React.FC<LoginContainerPropsType> = (props: any) => {
    return (
        <div>
            <Login/>
        </div>
    )
}

export default LoginContainer;