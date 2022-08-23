import React from 'react';
import '../styles/MovieListEntry.css';

const MovieListEntry = ({ title, id, watched, toggleMovie, removeMovie }) => {
    const handleRemove = () => removeMovie(id);
    const handleToggle = () => toggleMovie(id);

    return (
        <li className="movie-list-entry">
            <span style={{marginRight: "15px", textDecoration: watched ? "line-through" : "none"}}>{title}</span>
            <button className="remove-movie-button" onClick={handleRemove}>X</button>
            <button className="toggle-movie-button" onClick={handleToggle}>O</button>
        </li>
    )
}

export default MovieListEntry;