import { IoIosTimer } from "react-icons/io";
import { FaFire } from "react-icons/fa";

const RecipeCard = ({ recipe, handleWantToCoock }) => {
  const { img, name, description, ingredients, time, calories } = recipe;

  return (
    <div className="">
      <div className="card bg-base-100 w-80 md:w-96 shadow-xl z-10">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title -mt-6">{name}</h2>
          <p>{description}</p>
          <div className="border-t w-full"></div>
          <p className="font-bold ">Ingredients: {ingredients.length}</p>
          <ul className="ml-5">
            {ingredients.map((item, index) => (
              <li key={index} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
          <div className="border-t w-full"></div>
          <div className="flex justify-between my-2">
            <div className="flex items-center text-gray-400">
              <IoIosTimer />
              <span>{time} minuties</span>
            </div>
            <div className="flex items-center text-gray-400">
              <FaFire />
              <span>{calories} calories</span>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button
              onClick={() => handleWantToCoock(recipe)}
              className="btn btn-success"
            >
              Want to coock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
