import React from 'react';
import MovieListEntry from "./MovieListEntry";
import { v4 as uuid } from 'uuid';

const MovieList = ({ movies, toggleMovie, removeMovie }) =>
    <div className="movie-list">
        <h3>The current backlog:</h3>
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
    </div>

export default MovieList;