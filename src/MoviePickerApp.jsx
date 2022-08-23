import React from 'react';
import MoviePicker from "./MoviePicker";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import useMovieState from "./hooks/useMovieState";

const MoviePickerApp = ({ defaultMovies }) => {
    const { movies, addMovie, removeMovie, toggleMovie } = useMovieState(defaultMovies);

    return (
        <div className="movie-picker-app">
            <h1>What Are We Watching Tonight?</h1>
            <MoviePicker movies={movies}/>
            <AddMovie movies={movies} addMovie={addMovie}/>
            <MovieList movies={movies} toggleMovie={toggleMovie} removeMovie={removeMovie} />
        </div>
    )
}

export default MoviePickerApp;