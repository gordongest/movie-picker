import React, { useState } from 'react';
import useInputState from "./hooks/useInputState";

const AddMovie = ({ addMovie }) => {
    const [movie, changeMovie, resetMovie] = useInputState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(movie);
        resetMovie();
    }

    return (
        <div className="add-movie">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={movie} onChange={changeMovie}/>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}

export default AddMovie;