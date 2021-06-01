import {restorePasswordReducer, setError, setSuccessMessage} from './restore-password-reducer';
import dispatch from 'redux'

test('error message should be put into state', () => {
    const startState = {
        errorMessage: '',
        successMessage: ''
    }

    const endState = restorePasswordReducer(startState, setError('Sokol na ohote'))

    expect(endState.errorMessage).toBe('Sokol na ohote')
})

test('success message from server should be put into state', () => {
    const startState = {
        errorMessage: '',
        successMessage: ''
    }

    const endState = restorePasswordReducer(startState,setSuccessMessage('Sokol na ohote 2'))

    expect(endState.successMessage).toBe('Sokol na ohote 2')
})
