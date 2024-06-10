import React, { useState } from 'react';

export default function MovieCard ({movie}) {
  const { title, director, metascore, stars } = movie
  const [showStars, setShowStars] = useState(false)
  const toggleShowStars = () => {
    setShowStars(!showStars)
  }
  return (
    
    <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3 onClick={toggleShowStars} >Actors</h3>

        {showStars && stars && (
          stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
          )
        ))}
      </div>
      
    
      
  )
}
