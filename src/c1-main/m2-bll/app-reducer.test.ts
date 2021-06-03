import {appReducer, InitialStateType, setAppError, setAppStatus} from './app-reducer';

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        status: 'idle',
        isError: false
    }
})

test('isError and app status should be changed', () => {

    const endState1 = appReducer(startState, setAppError(true));
    const endState2 = appReducer(startState, setAppStatus('succeed'));

    expect(endState1.isError).toBeTruthy();
    expect(endState2.status).toBe('succeed');

})
