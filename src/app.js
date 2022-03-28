import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './header';
import Movies from './movies';
import Movie from './movie';
import Seats from './seats';
import Sucess from './sucess';

export default function App(){

    return (
        <BrowserRouter>
            <Header/>   
            <Routes>
                <Route path='/' element={<Movies/>}></Route>  
                <Route path='/movie/:idMovie' element={<Movie/>}></Route>  
                <Route path='/seats/:idSession' element={<Seats/>}></Route>
                <Route path='/sucess/' element={<Sucess/>}></Route>
            </Routes>         
        </BrowserRouter>
    );
}