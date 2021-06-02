import React from 'react';
import { NavLink } from 'react-router-dom';
import {PATH} from "../../../../c1-main/m1-ui/Routes";

interface IDisconnectProps {

}

const Disconnect: React.FC<IDisconnectProps> = () => {

    console.log('render Disconnect');
    return (
        <div>
            <button>log out</button>
            <NavLink to={PATH.PROFILE}>Profile Page</NavLink>
        </div>
    )
};

export default Disconnect;