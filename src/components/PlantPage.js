import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  return (
    <main>
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
