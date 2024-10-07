import { useState } from "react";
import "./App.css";
import Coocking from "./components/Coocking/Coocking";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OurRecipe from "./components/OurRecipe/OurRecipe";

function App() {
  const [coock, setCoock] = useState([]);

  const handleWantToCoock = (recipe) => {
    const newCoock = [...coock, recipe];
    setCoock(newCoock);
    console.log(coock);
  };

  return (
    <div>
      <Navbar />
      <Hero />

      <div className="flex flex-col md:flex-row">
        <OurRecipe handleWantToCoock={handleWantToCoock} />
        <Coocking coock={coock} />
      </div>
    </div>
  );
}

export default App;
