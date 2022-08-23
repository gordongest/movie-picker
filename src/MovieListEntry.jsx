import React from 'react';

const MovieListEntry = ({ title, id, watched, toggleMovie, removeMovie }) => {
    const handleRemove = () => removeMovie(id);
    const handleToggle = () => toggleMovie(id);

    return (
        <div className="movie-list-entry">
            <p>{title}</p>
            <button className="remove-movie-button" onClick={handleRemove}>X</button>
            <button className="toggle-movie-button" onClick={handleToggle}>O</button>
        </div>
    )
}

export default MovieListEntry;