import React, { useContext } from 'react'
import contextValue from '../Context/Recipe/RecipeContext'
import Loader from './Loader'
import Error from "./Error"
import NotFound from './NotFound'
import RecipeItem from './RecipeItem';

function Recipes(props) {
    const context = useContext(contextValue)
    const { recipe, loader, found, error } = context;
    return (
        <>
            {loader && <Loader />}
            {found === true && loader === false ? <NotFound /> : ""}
            {error === true && loader === false ? <Error /> : ""}
            {loader === false && found === false && error === false ? <div>
                <h1 className='text-left text-white text-5xl mt-28 mx-6'>
                    <b>Available Recipes</b>
                </h1>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {recipe.map((element, index) => {
                                return (
                                    <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                                        <RecipeItem title={element.recipe.label} image={element.recipe.image} calories={element.recipe.calories} ingredients={element.recipe.ingredients} url={element.recipe.url} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div> : ""}
        </>
    )
}

export default Recipes
