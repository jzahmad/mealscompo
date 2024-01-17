import { useGlobalContext } from "../Context";
import React, { useState, useEffect } from "react";
import "./Modal.css"; // Import your CSS file if it's in a separate file

export function Modal() {
  const { selectedMeal, unshowmodalcard } = useGlobalContext();

  return (
    <>
      <aside className="modal-overlay">
        <div className="modal-container">
          <div className="big-card">
            <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
            <div className="meal-details">
              <h1>{selectedMeal.strMeal}</h1>
              <h2>Instructions</h2>
              <p>{selectedMeal.strInstructions}</p>
              <div className="source-link">
                <a href={selectedMeal.strYoutube} target="_blank" rel="noopener noreferrer">
                  Source
                </a>
              </div>
              <button className="close-button" onClick={unshowmodalcard}>
                Close
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Modal;
