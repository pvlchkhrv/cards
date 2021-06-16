import {applyMiddleware, combineReducers, createStore} from 'redux';
import {LoginActionsType, loginReducer} from './login-reducer';
import {registerReducer} from './register-reducer';
import {profileReducer} from './profile-reducer';
import {restorePasswordReducer} from './restore-password-reducer';
import {newPasswordReducer} from './new-password-reducer';
import {testReducer} from './test-reducer';
import thunk from 'redux-thunk';
import {appReducer} from './app-reducer';
import {packsReducer} from './cardPacks-reducer';
import cardsReducer from "./cards-reducer";
import { learnReducer } from './learn-reducer';

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
    learn: learnReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
// @ts-ignore
window.store = store;

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppRootActionsType =
    | LoginActionsType
