import React, { FC , useState } from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizzaForm';
import Pizza from './models/Pizaa';
import DisplayPizzas from './components/DisplayPizzas';


const App : FC = () => {

  const [pizzaList, setPizzaList] = useState<Pizza[]>([])

  const addNewPizza = (newPizza: Pizza) => {
    setPizzaList([...pizzaList,newPizza])
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzaList(pizzaList.map((pizza) => 
      (pizza.id === newPizza.id ? newPizza : pizza)))
  }

  const deletePizza = (id: number) => {
    const updatedList = pizzaList.filter((pizza) => (pizza.id !== id ))
    setPizzaList(updatedList)
  }

  return (
    <div className="App">
      <div className='wrap'>
         <span className='heading'>New app</span>
         <AddPizzaForm addNewPizza={addNewPizza}/>
         <DisplayPizzas pizzasList={pizzaList} updatePizza={updatePizza} deletePizza={deletePizza}/>
      </div>
    </div>
  );
}

export default App;
