import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

const OurRecipe = ({ handleWantToCoock }) => {
  const [recipeCard, setRecipeCard] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await fetch("recipe.json");
        const data = await res.json();
        setRecipeCard(data);
      } catch (error) {
        console.error("data fetching error", error);
      }
    };

    data();
  }, []);

  return (
    <div className="md:w-[60%]">
      <div className="container mx-auto px-3 lg:px-0 z-10">
        <div>
          <div className="flex flex-col justify-center items-center space-y-5">
            <h2 className="card-title text-5xl mt-16">Recipe </h2>
            <p className="text-md text-center my-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              laborum illum quo facilis, nostrum ipsum explicabo in alias
              aliquid cumque?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 justify-center items-center mt-10">
            {recipeCard.map((recipe, index) => (
              <RecipeCard
                key={index}
                recipe={recipe}
                handleWantToCoock={handleWantToCoock}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRecipe;
