import React, { useState } from "react";
import RecipeContext from "./RecipeContext";
import config from "../Config/config"

function RecipeState(props) {

    //* Managing error state
    const [error, Seterror] = useState(false);

    //* State for dish name
    const [dishName, setDishName] = useState("")

    //* When recipe not found
    const [found, Setfound] = useState(false)

    //* Defining loader state
    const [loader, Setloader] = useState(true);

    //* Defining recipe State
    const [recipe, Setrecipe] = useState([])

    //* Fetching api data from config
    const { api, host, key } = config

    //* Function to fetch recipe
    const getRecipe = async (dish) => {
        try {
            setDishName(dish)
            localStorage.setItem("dish", dish)
            Setloader(true);
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': key,
                    'X-RapidAPI-Host': host,
                    mode: 'no-cors'
                }
            };

            let data = await fetch(`${api}${dish}`, options)
            let response = await data.json()
            if (response.hits.length === 0) { Setfound(true); Setloader(false); } else { Setfound(false) }
            Setrecipe(response.hits)
            Setloader(false);
            Seterror(false)
        } catch (error) {
            Setloader(false)
            Seterror(true)
        }
    };

    return (
        <>
            <RecipeContext.Provider value={{ getRecipe, recipe, loader, found, error, dishName }}>
                {props.children}
            </RecipeContext.Provider>
        </>
    );
}

export default RecipeState;
