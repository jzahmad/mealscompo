import { useGlobalContext } from '../Context';
import React, { useEffect } from "react";
import './Favourites.css';

export default function Favourite() {
  const { fav, removefavourite } = useGlobalContext();

  // Save favorites to local storage whenever fav changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(fav));
  }, [fav]);

  return (
    <div className="favourite-container">
      {fav.map((meal) => (
        <div className="favourite-card" key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <div>
            <h4>{meal.strMeal}</h4>
            <button onClick={() => removefavourite(meal.idMeal)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}
