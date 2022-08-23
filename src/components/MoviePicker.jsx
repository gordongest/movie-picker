import React, { useState } from 'react';
import SelectedMovie from "./SelectedMovie";
import '../styles/MoviePicker.css';

const MoviePicker = ({ movies }) => {
    const [movie, setMovie] = useState();

    const handleClick = () => {
        const unwatchedMovies = movies.filter(movie => movie.watched === false);
        const rand = Math.floor(Math.random() * unwatchedMovies.length);

        setMovie(unwatchedMovies[rand]);
    }

    return (
        <div className="movie-picker">
            {movie ?
                <div>
                    <h2>You are watching:</h2>
                    <SelectedMovie title={movie.title}/>
                </div> :
                <div>
                    <h2>click to pick a movie!</h2>
                </div>
            }
            <button className="pick-button" onClick={handleClick}>pick a movie!</button>
        </div>
    )
}

export default MoviePicker;