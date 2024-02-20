import { useGlobalContext } from '../Context';
import React, { useEffect } from "react";
import './Favourites.css';

export default function Favourite() {
  const { fav, removefavourite, selectMeal } = useGlobalContext();

  // Save favorites to local storage whenever fav changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(fav));
  }, [fav]);

  return (
    <div className="favourite-container">
      {fav.map((meal) => (
        <div className="favourite-card" key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={meal.strMeal} onClick={() => selectMeal(meal.idMeal)}/>
          <div>
            <h4>{meal.strMeal}</h4>
            <button style={{ backgroundColor: 'green'}} onClick={() => removefavourite(meal.idMeal)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}
