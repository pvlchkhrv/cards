import {applyMiddleware, combineReducers, createStore} from 'redux';
import {registerReducer} from './register-reducer';
import {restorePasswordReducer} from './restore-password-reducer';
import {newPasswordReducer} from './new-password-reducer';
import {testReducer} from './test-reducer';
import thunk from 'redux-thunk';
import {AppActionsType, appReducer} from './app-reducer';
import {packsReducer} from './cardPacks-reducer';
import cardsReducer from "./cards-reducer";
import {LoginActionsType, loginReducer} from '../../c2-features/f1-auth/a1-login/login-reducer';
import profileReducer, {ProfileActionsType} from '../../c2-features/f1-auth/a3-profile/profile-reducer';

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    restorePassword: restorePasswordReducer,
    newPassword: newPasswordReducer,
    packs: packsReducer,
    test: testReducer,
    cards: cardsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
// @ts-ignore
window.store = store;

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppRootActionsType =
    | LoginActionsType
    | AppActionsType
    | ProfileActionsType
