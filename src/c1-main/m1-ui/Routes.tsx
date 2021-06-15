import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import Error404 from './404/Error404';
import Test from './test/Test';
import RegisterPage from "./registration/RegisterPage";
import LoginContainer from "./login/LoginContainer";
import RestorePasswordPage from "./restore-password/RestorePasswordPage";
import {NewPasswordContainer} from "./new-password/NewPasswordContainer";
import {ProfileContainer} from './profile/ProfileContainer';
import {CardPacksPage} from './cardPacks/СardPacksPage';

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    ERROR: '/error',
    RESTORE_PASSWORD: '/restore-password',
    SET_NEW_PASSWORD: '/set-new-password',
    CARD_PACKS: '/card-packs',
    TEST:'/test'

}

export const Routes: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={'/login'}/>}/>
                <Route path={PATH.LOGIN} render={() => <LoginContainer/>}/>
                <Route path={PATH.REGISTER} render={() => <RegisterPage/>}/>
                <Route path={PATH.REGISTER} render={() => <RegisterPage/>}/>
                <Route path={PATH.PROFILE} render={() => <ProfileContainer/>}/>
                <Route path={PATH.RESTORE_PASSWORD} render={() => <RestorePasswordPage/>}/>
                <Route path={PATH.CARD_PACKS} render={() => <CardPacksPage/>}/>
                <Route path={PATH.SET_NEW_PASSWORD} render={() => <NewPasswordContainer/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes;
