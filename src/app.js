import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Header from './header';
import Movies from './movies';
import Movie from './movie';
import Seats from './seats';

export default function App(){

    return (
        <BrowserRouter>
            <Header/>   
            <Routes>
                <Route path='/' element={<Movies/>}></Route>  
                <Route path='/movie/:idMovie' element={<Movie/>}></Route>  
                <Route path='/seats/:idSession' element={<Seats/>}></Route>
            </Routes>         
        </BrowserRouter>
    );
}