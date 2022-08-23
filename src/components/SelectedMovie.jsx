import React from 'react';
import '../styles/SelectedMovie.css';

const SelectedMovie = ({ title }) =>
    <div className="selected-movie">
        <h3>
            {title}
        </h3>
    </div>

export default SelectedMovie;