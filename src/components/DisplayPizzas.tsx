import React, { FC } from "react";
import './styles.css'
import Pizza from "../models/Pizaa";
import SinglePizza from "./SinglePizza";

interface DisplayPizzasProps {
    pizzasList : Pizza[],
    updatePizza : (newPizza : Pizza) => void
    deletePizza : (id : number) => void
}

const DisplayPizzas : FC<DisplayPizzasProps> = ({pizzasList , updatePizza , deletePizza}) => {
  return (
    <div className="container">
       {pizzasList.map((pizza) => {
          return <SinglePizza pizza={pizza} key={pizza.id} updatePizza={updatePizza} deletePizza={deletePizza}/>
       })}
    </div>
)};

export default DisplayPizzas;
