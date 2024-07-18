import Ingredient from "./Ingredient";

const IngredientList = ({ ingredients, handleIngredient, add }) => {
    return (
        <ul className="ingredientsList">
            {
                ingredients.map((ingredient, index) => (
                    <Ingredient 
                    key={index} 
                    ingredient={ingredient}
                    handleIngredient={handleIngredient}
                    add={add}
                    index={index}
                    cssClass="ingredients"
                    />
                ))
            }
        </ul>
    )
};

export default IngredientList;
