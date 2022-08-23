import React from 'react';
import useInputState from "../hooks/useInputState";

const AddMovie = ({ addMovie }) => {
    const [movie, changeMovie, resetMovie] = useInputState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(movie);
        resetMovie();
    }

    return (
        <div className="add-movie">
            <form className="add-movie-form" onSubmit={handleSubmit}>
                <input className="add-movie-input" type="text" value={movie} onChange={changeMovie}/>
                <button className="add-movie-button" type="submit">Add Movie</button>
            </form>
        </div>
    )
}

export default AddMovie;