import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function Basket() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
        <Link to="/">Anasayfa</Link>
      <h2>Favoriler</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            <img src={favorite.imageUrl} alt={favorite.altDescription} />
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Basket;




