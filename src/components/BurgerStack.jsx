// `src/components/BurgerStack.jsx`
const BurgerStack = ({stack, handleIngredient, add }) => {
    return (
        <ul className="stack">
            {
                stack.map((ingredient, index) => (
                    // <li key={index} style={{background: `${ingredient.color}`}}>
                    <li key={index} style={{background: `${ingredient.color}`}}>
                        {ingredient.name}
                        <button onClick={() => handleIngredient(ingredient, index, add)}>{ add ? '+' : '-'}</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default BurgerStack;
