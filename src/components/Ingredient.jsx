const Ingredient = ({ingredient, handleIngredient, index, add, cssClass}) => {
    return (
        <li className={cssClass} style={{ background: `${ingredient.color}` }} >
            <p>{ingredient.name}</p>
            <button onClick={() => handleIngredient(ingredient, index, add)}><span>{add ? '+' : '-'}</span></button>
        </li>
    );
}

export default Ingredient;