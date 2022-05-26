import './App.css';
import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const addNewFood = (newFood) => {
    const updatesFoods = [...foodList, newFood];
    setFoodList(updatesFoods);
  };

  return (
    <div className="App">
      <h1>Nutrition App</h1>
      <AddFoodForm addNewFood={addNewFood} />
      <Search />
      <div>
        <div>
          <FoodBox foodList={foodList} />
        </div>
      </div>
    </div>
  );
}

export default App;
