import React from 'react'

function RecipeItem(props) {
    const { title, image, calories, ingredients, url } = props;
    console.log(ingredients)
    return (
        <>
            <div className="bg-black p-6 rounded-lg border-2 border-yellow">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt="food" />
                <h2 className="text-xl text-yellow font-medium title-font mb-4">{title}</h2>
                <h2 className="text-xl text-white font-medium title-font mb-4">Calories - {calories}</h2>
                <h3 className="tracking-widest text-yellow text-lg font-medium title-font">Ingredients</h3>

                {/* // TODO */}
                <ol>
                    {ingredients.map((element, index) => {
                        <li key={index} className='text-yellow'>
                            {element.text}
                            {console.log(element.text)}
                        </li>
                    })}
                </ol>

                <a href={url} target='_blank' className="text-yellow inline-flex items-center cursor-pointer hover:text-white">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </>
    )
}

export default RecipeItem
