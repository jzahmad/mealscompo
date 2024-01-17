import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';

const Appcontext = React.createContext();
const AllMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
const RandomMealUrl= "https://www.themealdb.com/api/json/v1/1/random.php"

const AppProvider = ({ children }) => {
    const [meals, setMeals] = useState([]);
    const [searchterm, setSearchterm] = useState('b'); // Corrected typo
    const [showModal,setShowModel]=useState(false)
    const [selectedMeal,setSelectedMeal]=useState(null)
    const [fav,setFav]=useState([]);

    const fetchMeals = async (url) => {
        try {
            const response = await axios.get(url);
            if (response.data.meals) {
                setMeals(response.data.meals);
            } else {
                setMeals([]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const randomMeal = () => {
        fetchMeals(RandomMealUrl);
    }

    const selectMeal = (idMeal) => {
        let meal;
        meal = meals.find((meal) => meal.idMeal === idMeal);
        setSelectedMeal(meal);
        setShowModel(true);
    }
    
    
    const unshowmodalcard = () => {
        setShowModel(false);
    }

    const addFavourite = (idMeal) =>{
        let meal;
        meal = meals.find((meal) => meal.idMeal === idMeal);
        if(!fav.includes(meal)){
            setFav([...fav, meal]);
        }
    }

    const removefavourite = (idMeal) => {
        const updatedFav = fav.filter((meal) => meal.idMeal !== idMeal);
        setFav(updatedFav);
    }

    useEffect(() => {
        console.log(fav)
    }, [addFavourite]); // Empty dependency array to run the effect only once

    useEffect(() => {
        fetchMeals(AllMealsUrl);
    }, []); // Empty dependency array to run the effect only once

    useEffect(() => {
        if (!searchterm) return
        fetchMeals(`${AllMealsUrl}${searchterm}`);
    }, [searchterm]); 
    return <Appcontext.Provider value={{ meals, setSearchterm, randomMeal, showModal, selectMeal, unshowmodalcard,selectedMeal,addFavourite,fav , removefavourite }}>{children}</Appcontext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(Appcontext);
};

export { Appcontext, AppProvider };
