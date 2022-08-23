import React from 'react';
import MovieListEntry from "./MovieListEntry";
import { v4 as uuid } from 'uuid';
import '../styles/MovieList.css';

const MovieList = ({ movies, toggleMovie, removeMovie }) =>
    <div className="movie-list">
        <h3>The current backlog:</h3>
        <ul>
            {movies.map(movie => (
                <MovieListEntry
                    title={movie.title}
                    id={movie.id}
                    watched={movie.watched}
                    toggleMovie={toggleMovie}
                    removeMovie={removeMovie}
                    key={uuid()}
                />
                )
            )}
        </ul>
    </div>

export default MovieList;