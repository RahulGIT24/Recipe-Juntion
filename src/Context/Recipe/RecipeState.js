import React from "react";
import RecipeContext from "./RecipeContext";
import config from "../Config/config"

function recipeState(props) {

    //* Fetching api data from config
    const { api, ID, key } = config

    //* Function to fetch recipe

    const getRecipe = async (dish) => {

        let data = await fetch(`${api}${dish}${ID}${key}`)
        let response = await data.json();
        console.log(response.hits)
    };

    return (
        <>
            <RecipeContext.Provider value={{ getRecipe }}>
                {props.children}
            </RecipeContext.Provider>
        </>
    );
}

export default recipeState;
