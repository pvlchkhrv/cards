import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../Routes';
import s from './Header.module.css';

const Header: React.FC = () => {
    return (
        <div className={s.headerContainer}>
            <NavLink to={PATH.LOGIN}>Login</NavLink>
            <NavLink to={PATH.REGISTER}>Register</NavLink>
            <NavLink to={PATH.PROFILE}>Profile</NavLink>
            <NavLink to={PATH.RESTORE_PASSWORD}>Restore Password</NavLink>
            <NavLink to={PATH.SET_NEW_PASSWORD}>Set New Password</NavLink>
            <NavLink to={PATH.CARD_PACKS}>Card Packs</NavLink>
            <NavLink to={PATH.TEST}>Demo</NavLink>
        </div>
    )
}

export default Header;
