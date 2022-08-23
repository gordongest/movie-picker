import React, { useState } from 'react';
import { defaultMovies } from './defaultMovies';
import MoviePickerApp from "./MoviePickerApp";
import './App.css';

const App = () => {


    const removeMovie = id => (
        setMovieList(prevMovies => prevMovies.filter(movie => movie.id !== id))
    );

    return (
        <div className="App">
            <MoviePickerApp defaultMovies={defaultMovies}/>
        </div>
    )
}

export default App;
