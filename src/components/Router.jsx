import React from 'react'
import { App } from './App';
import Home from './Home/Home'
import Signup from './Signup/Signup';
import { HashRouter, Routes, Route } from 'react-router-dom'


export default function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/home' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </HashRouter>
    )
}
