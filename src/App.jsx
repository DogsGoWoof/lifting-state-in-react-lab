// src/App.jsx

import { useState } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';

const App = () => {

  const [stack, setStack] = useState([]);
  const [availableIngredients, setAvailableIngredients] = useState([
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ]);

  const handleIngredient = (ingredient, index, add) => {
    if (!add) {
      const newStack = [...stack]
      newStack.splice(index, 1);
      setStack(newStack);
    } else {
      setStack([...stack, ingredient]);
    }
  };

  return (
    <main>
      <>
        <h1>
          <hr id="topBun" />
          <hr id="tomato" />
          <hr id="lettuce" />
          <hr id="cheese" />
          <span id="title">Burger Stacker</span>
          <hr id="bottomBun" />
        </h1>
      </>
      <section>
        <IngredientList ingredients={availableIngredients} handleIngredient={handleIngredient} add={true} />
        <BurgerStack stack={stack} handleIngredient={handleIngredient} add={false} />
      </section>
    </main>
  );
};

export default App;
