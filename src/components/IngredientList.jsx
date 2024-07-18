// src/components/IngredientList.jsx
import React from "react";
const IngredientList = ({ ingredients, handleIngredient, add }) => {

    // console.log(ingredients);

    return (
        <ul>
            {
                ingredients.map((ingredient, index) => (
                    <li key={index} style={{background: `${ingredient.color}`}}>
                        {ingredient.name}
                        <button onClick={() => handleIngredient(ingredient, index, add)}>{ add ? '+' : '-'}</button>
                    </li>
                ))
            }
        </ul>
    )
};

export default IngredientList;
