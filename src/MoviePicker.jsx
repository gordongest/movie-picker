import React, { useState } from 'react';
import SelectedMovie from "./SelectedMovie";

const MoviePicker = ({ movies }) => {
    const [movie, setMovie] = useState();

    const handleClick = () => {
        const rand = Math.floor(Math.random() * movies.length) + 1;
        setMovie(movies[rand]);
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