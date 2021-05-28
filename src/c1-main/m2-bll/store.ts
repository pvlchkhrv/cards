import {combineReducers, createStore} from 'redux';
import {loginReducer} from './login-reducer';
import {registerReducer} from './register-reducer';
import {profileReducer} from './profile-reducer';
import {restorePasswordReducer} from './restore-password-reducer';
import {newPasswordReducer} from './new-password-reducer';
import {testReducer} from './test-reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    restorePassword: restorePasswordReducer,
    newPassword: newPasswordReducer,
    test: testReducer
});

export const store = createStore(rootReducer);
// @ts-ignore
window.store = store;

export type AppRootStateStateType = ReturnType<typeof rootReducer>
