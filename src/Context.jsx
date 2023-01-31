import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";



const AppContext = createContext();

const AppProvider = ({children}) => {

// const variables
const MealsUrl = "https://themealdb.com/api/json/v1/1/search.php?s="
const RandomMealUrl = "https://themealdb.com/api/json/v1/1/random.php"
// End of constant variables


// Define MealsApp Local States
const [Meals, setMeals] = useState([]);
const [IsLoading, setIsLoading] = useState(false);
const [SelectedMeal, setSelectedMeal] = useState(null);
// End of MealsApp Local States

// Search States
const [SearchTerm, setSearchTerm] = useState("");
// 

// Modal States
const [ShowModal, setShowModal] = useState(false);
// 

// Favorite States
const [FavoriteMeals, setFavoriteMeals] = useState([]);
// End of Favorite States





// UseEffect funtions
useEffect(() => {
    GetAndSetMeals(MealsUrl)
}, []);

// End of UseEffect functions

// Meals  Functions 

const GetAndSetMeals = async (url) => {
    setIsLoading(true)
    try {
        const {data} = await axios(url)
    
        if(data.meals)
            setMeals(data.meals)
        else
            setMeals([])
    
    } catch (error) {
        console.log("Axios Error: ", error)
    }
    setIsLoading(false)
}

const ChooseMeal = (MealID) => {

    let ChosenMeal;
    ChosenMeal = Meals.find( meal => meal.idMeal === MealID)
    ChosenMeal ? setSelectedMeal(ChosenMeal): null
    setShowModal(true)
    
}

const GetRandomMeal = () => {
    GetAndSetMeals(RandomMealUrl)
}

// End of Meals  Functions

// Search funtions here 
useEffect(() => {

    GetAndSetMeals(`${MealsUrl}${SearchTerm}`)
    
}, [SearchTerm]);

// End of Search functions

// Favorite Functions here
const MakeFavorite = (MealID) => {

    const CheckFavorite = FavoriteMeals.find( meal => meal.idMeal === MealID)
    if(CheckFavorite) return
    const Favorite = Meals.find( meal => meal.idMeal === MealID)
    setFavoriteMeals([...FavoriteMeals, Favorite])
    
}

const RemoveFromFavorite = (MealID) => {
    const UpdatedFavorite = FavoriteMeals.filter( meal => meal.idMeal !== MealID)
    setFavoriteMeals(UpdatedFavorite)

}

// End of Favorite Functions

// Modal Functions
const CloseModal = () => {
    setShowModal(false)
}
// End of Modal Functions
    return (
        <AppContext.Provider
            value={{
                Meals, ChooseMeal, SelectedMeal, setSelectedMeal, GetRandomMeal,
                IsLoading,
                setSearchTerm, SearchTerm,   
                ShowModal, CloseModal,
                MakeFavorite, FavoriteMeals, RemoveFromFavorite
                
            }}

        >
            {children}
        </AppContext.Provider>
    )
}

export const UseGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
