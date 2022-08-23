import React, { useState, useEffect } from 'react';
import Movie from "./Movie";

const MoviePicker = ({ movies }) => {
    const [movie, setMovie] = useState();

    const handleClick = () => {
        const rand = Math.floor(Math.random() * movies.length) + 1;

        setMovie(movies[rand]);
    }

    useEffect(() => {
        console.log("moviePicker movies: ", movies)
    }, [movies])

    return (
        <div>
            <button className="pick-button" onClick={handleClick}>pick a movie!</button>
            {movie ?
                <div>
                    <h2>You are watching:</h2>
                    <Movie movie={movie}/>
                </div> :
                <div>
                    <h2>click to pick a movie!</h2>
                </div>
            }
        </div>
    )
}

export default MoviePicker;