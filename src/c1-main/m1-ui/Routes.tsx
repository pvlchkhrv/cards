import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Register from './registration/Register';
import Profile from './profile/Profile';
import Error404 from './404/Error404';
import RestorePassword from './restore-password/RestorePassword';
import NewPassword from './new-password/NewPassword';
import Test from './test/Test';
import LoginPage from "./login/LoginPage";

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    ERROR: '/error',
    RESTORE_PASSWORD: '/restore-password',
    SET_NEW_PASSWORD: '/set-new-password',
    TEST:'/test'
}

export const Routes: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={'/login'}/>}/>
                <Route path={PATH.LOGIN} render={() => <LoginPage/>}/>
                <Route path={PATH.REGISTER} render={() => <Register/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.RESTORE_PASSWORD} render={() => <RestorePassword/>}/>
                <Route path={PATH.SET_NEW_PASSWORD} render={() => <NewPassword/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>  
    )
}

export default Routes;
