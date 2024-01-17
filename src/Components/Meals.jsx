// Import necessary dependencies
import React from 'react';
import { useGlobalContext } from '../Context';
import './Meals.css'; // Import your CSS file

// Meals component definition
export function Meals() {
  const { meals,selectMeal,addFavourite } = useGlobalContext();

  return (
    <section className="meals-container">
      {meals.length > 0 ? (
        meals.map((meal) => (
          <div key={meal.idMeal} className="card">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" onClick={() => selectMeal(meal.idMeal)}/>
            <div className="card-body">
              <h4 className="card-title">{meal.strMeal}</h4>
              <button onClick={()=>addFavourite(meal.idMeal)} className="hello-button">Like</button>
            </div>
          </div>
        ))
      ) : (
        <p className="no-meals-message">There are no meals available.</p>
      )}
    </section>
  );
}

export default Meals;
