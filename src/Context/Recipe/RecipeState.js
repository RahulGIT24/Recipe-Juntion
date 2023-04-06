import React, { useState } from "react";
import RecipeContext from "./RecipeContext";
import config from "../Config/config"

function RecipeState(props) {

    //* Defining recipe State
    const [recipe, Setrecipe] = useState([])

    //* Fetching api data from config
    const { api, ID, key } = config

    //* Function to fetch recipe
    const getRecipe = async (dish) => {

        let data = await fetch(`${api}${dish}${ID}${key}`)
        let response = await data.json();
        Setrecipe(response.hits)
    };

    return (
        <>
            <RecipeContext.Provider value={{ getRecipe, recipe }}>
                {props.children}
            </RecipeContext.Provider>
        </>
    );
}

export default RecipeState;
