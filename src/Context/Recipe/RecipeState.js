import React, { useState } from "react";
import RecipeContext from "./RecipeContext";
import config from "../Config/config"

function RecipeState(props) {

    //* Managing error state
    const [error, Seterror] = useState(false);

    //* When recipe not found
    const [found, Setfound] = useState(false)

    //* Defining loader state
    const [loader, Setloader] = useState(true);

    //* Defining recipe State
    const [recipe, Setrecipe] = useState([])

    //* Fetching api data from config
    const { api, ID, key } = config

    //* Function to fetch recipe
    const getRecipe = async (dish) => {
        try {
            Setloader(true);
            let data = await fetch(`${api}${dish}${ID}${key}`)
            let response = await data.json();
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
            <RecipeContext.Provider value={{ getRecipe, recipe, loader, found, error }}>
                {props.children}
            </RecipeContext.Provider>
        </>
    );
}

export default RecipeState;
