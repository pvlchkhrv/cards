import React from 'react';
import LoginContainer from "./LoginContainer";

type LogInPagePropsType = {

}

const LoginPage: React.FC<LogInPagePropsType> = (props: any) => {
    return (
        <div>
            <LoginContainer/>
        </div>
    )
}

export default LoginPage;