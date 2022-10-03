import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] =useState([])

  useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then((r) => r.json())
  .then((plants) => console.log(plants));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  return (
    <div>
    <NewPlantForm onAddPlant={handleAddPlant}/>
    <ul className="cards">{
      plants.map((plant) => <PlantCard 
      key={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price}
      />)}</ul>
    </div>
  );
}

export default PlantList;
