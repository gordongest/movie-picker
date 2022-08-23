import React from 'react';

const SelectedMovie = ({ title }) => {
    return (
        <div className="selected-movie">
            <h3>
                {title}
            </h3>
        </div>
    )
}

export default SelectedMovie;