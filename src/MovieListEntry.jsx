import React from 'react';

const MovieListEntry = ({ title, id, watched, toggleMovie, removeMovie }) => {
    const handleRemove = () => {
        removeMovie(id);
    }

    const handleToggle = () => {
        toggleMovie(id);
    }

    return (
        <div className="movie-list-entry">
            <p>{title}</p>
            <button className="remove" onClick={handleRemove}>X</button>
            <button className="toggle" onClick={handleToggle}>O</button>
        </div>
    )
}

export default MovieListEntry;