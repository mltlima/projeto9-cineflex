import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Header from './header';
import Movies from './movies';

export default function App(){

    return (
        <BrowserRouter>
            <Header/>   
            <Routes>
                <Route path='/' element={<Movies/>}></Route>    
            </Routes>         
        </BrowserRouter>
    );
}