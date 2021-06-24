import React from 'react';
import {useFormik} from 'formik';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Paper,
    TextField
} from '@material-ui/core';
import s from './Login.module.css'
import {NavLink} from 'react-router-dom';
import {PATH} from '../../../c1-main/m1-ui/Routes';

type LoginPropsType = {
    onSubmitHandler: (email: string, password: string, rememberMe: boolean) => void
}

export const Login: React.FC<LoginPropsType> = ({onSubmitHandler}) => {
    const formik = useFormik({
        initialValues: {
            email: 'panich2303@gmail.com',
            password: '12345678',
            rememberMe: false,
        },
        validate: values => {
            const errors: FormikErrorType = {};

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password is required!';
            } else if (values.password.length < 8) {
                errors.password = 'Must be more than 7 characters'
            }

            return errors;
        },
        onSubmit: values => {
            onSubmitHandler(values.email, values.password, values.rememberMe);
        },
    });

    return (
        <div className={s.container}>
            <Paper className={s.paper} elevation={3}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel>
                            <h3>LOGIN</h3>
                        </FormLabel>
                        <FormGroup>
                            <TextField
                                variant={'outlined'}
                                label="Email"
                                margin="normal"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email &&
                            formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                            <TextField
                                variant={'outlined'}
                                type="password"
                                label="Password"
                                margin="normal"
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password &&
                            formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                            <FormControlLabel
                                label={'Remember me'}
                                control={
                                    <Checkbox
                                        {...formik.getFieldProps('rememberMe')}/>
                                }
                            />
                            <Button type={'submit'} variant={'contained'} color={'default'} className={s.button}>Log
                                In</Button>
                        </FormGroup>
                    </FormControl>
                </form>
                <div className={s.reg}>
                    <NavLink to={PATH.REGISTER}>Sign up</NavLink>
                </div>
            </Paper>
        </div>
    );
};


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
