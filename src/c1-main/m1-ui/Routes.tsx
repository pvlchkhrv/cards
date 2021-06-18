import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import Error404 from './404/Error404';
import Test from './test/Test';
import RegisterPage from "./registration/RegisterPage";
import RestorePasswordPage from "./restore-password/RestorePasswordPage";
import {NewPasswordContainer} from "./new-password/NewPasswordContainer";
import {CardPacksPage} from './cardPacks/СardPacksPage';
import CardsPage from "./cards/CardsPage";
import LearnPage from './learn/LearnPage';
import ProfilePage from './profile/ProfilePage';
import LoginPage from './login/LoginPage';

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    ERROR: '/error',
    RESTORE_PASSWORD: '/restore-password',
    SET_NEW_PASSWORD: '/set-new-password',
    CARDS: '/cards',
    CARD_PACKS: '/card-packs',
    LEARN: '/learn',
    TEST:'/test'

}

export const Routes: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={'/login'}/>}/>
                <Route path={PATH.LOGIN} render={() => <LoginPage/>}/>
                <Route path={PATH.REGISTER} render={() => <RegisterPage/>}/>
                <Route path={PATH.REGISTER} render={() => <RegisterPage/>}/>
                <Route path={PATH.PROFILE} render={() => <ProfilePage/>}/>
                <Route path={PATH.RESTORE_PASSWORD} render={() => <RestorePasswordPage/>}/>
                <Route path={PATH.CARD_PACKS} render={() => <CardPacksPage/>}/>
                <Route path={PATH.SET_NEW_PASSWORD} render={() => <NewPasswordContainer/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>
                <Route path={PATH.CARDS + "/:cardPackID"} render={() => <CardsPage/>}/>
                <Route path={PATH.LEARN} render={() => <LearnPage/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes;
