import Ingredient from "./Ingredient";

const BurgerStack = ({stack, handleIngredient, add }) => {
    if (stack.length === 0) {
        return <ul className="stack" style={{alignItems: "center"}}>
            <li key="noIngredients" style={{textAlign: 'center', fontSize: '5dvh', lineHeight: '1', color: 'white', border: 'none'}}>No Ingredients</li>
            </ul>;
    }
    return (
        <ul className="stack">
            {
                stack.map((ingredient, index) => (
                    <Ingredient 
                    key={index} 
                    ingredient={ingredient}
                    handleIngredient={handleIngredient}
                    add={add}
                    index={index}
                    cssClass="stackIngredients"
                    />
                ))
            }
        </ul>
    );
};

export default BurgerStack;
