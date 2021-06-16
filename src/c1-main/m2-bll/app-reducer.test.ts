import {appReducer, InitialStateType, setAppError, setAppStatus} from './app-reducer';

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        isAuth: false,
        status: 'idle',
        error: ""
    }
})

test('isError and app status should be changed', () => {

    const endState1 = appReducer(startState, setAppError("error"));
    const endState2 = appReducer(startState, setAppStatus('succeed'));

    expect(endState1.error).toBe("error")
    expect(endState2.status).toBe('succeed');

})
