import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Profile from './profile/Profile';
import Error404 from './404/Error404';
import NewPassword from './new-password/NewPassword';
import Test from './test/Test';
import RegisterPage from "./registration/RegisterPage";
import LoginContainer from "./login/LoginContainer";
import RestorePasswordPage from "./restore-password/RestorePasswordPage";
import CardsPage from "./cards/CardsPage";

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    ERROR: '/error',
    RESTORE_PASSWORD: '/restore-password',
    SET_NEW_PASSWORD: '/set-new-password',
    CARDS: '/cards',
    TEST: '/test'

}

export const Routes: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={'/login'}/>}/>
                <Route path={PATH.LOGIN} render={() => <LoginContainer/>}/>
                <Route path={PATH.REGISTER} render={() => <RegisterPage/>}/>
                <Route path={PATH.REGISTER} render={() => <RegisterPage/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.RESTORE_PASSWORD} render={() => <RestorePasswordPage/>}/>
                <Route path={PATH.SET_NEW_PASSWORD} render={() => <NewPassword/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>
                <Route path={PATH.CARDS + "/:cardPackID"} render={() => <CardsPage/>}/>
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes;
