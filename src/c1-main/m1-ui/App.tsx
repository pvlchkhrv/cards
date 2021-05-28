import React from 'react';
import './App.css';
import Header from './header/Header';
import {HashRouter} from 'react-router-dom';
import Routes from './Routes';

function App() {
    return (
        <HashRouter>
            <div className={'App'}>
                <Header/>
                <Routes/>
            </div>
        </HashRouter>
    )
}

export default App;
