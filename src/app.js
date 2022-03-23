import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Header from './header';

export default function App(){

    return (
        <BrowserRouter>
            <Header/>            
        </BrowserRouter>
    );
}