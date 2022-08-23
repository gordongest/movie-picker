import React from 'react';
import { defaultMovies } from './defaultMovies';
import MoviePickerApp from "./MoviePickerApp";
import './App.css';

const App = () =>
    <div className="App">
        <MoviePickerApp defaultMovies={defaultMovies}/>
    </div>

export default App;
