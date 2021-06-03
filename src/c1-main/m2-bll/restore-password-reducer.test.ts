import {
    InitialStateType,
    restorePasswordReducer, setErrorMessage,
    setIsRegistered,
    setSuccessMessage
} from './restore-password-reducer';

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        errorMessage: '',
        successMessage: '',
        isRegistered: false,
    }
})

test('error message should be put into state', () => {

    const endState = restorePasswordReducer(startState, setErrorMessage('Sokol na ohote'))

    expect(endState.errorMessage).toBe('Sokol na ohote')
})

test('success message from server should be put into state', () => {

    const endState = restorePasswordReducer(startState,setSuccessMessage('Sokol na ohote 2'))

    expect(endState.successMessage).toBe('Sokol na ohote 2')
})

test('statuses of isRegistered and isError should be changed', () => {

    const endState1 = restorePasswordReducer(startState,setIsRegistered(true))

    expect(endState1.isRegistered).toBeTruthy()
})
