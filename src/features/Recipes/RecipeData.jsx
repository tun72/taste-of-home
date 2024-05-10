import React from "react";
import { useRecipe } from "./useRecipe";
import Spinner from "../../ui/Spinner";
import RecipeList from "./RecipeList";

export default function RecipeData({ country }) {
  const { data, isLoading } = useRecipe({ country });

  if (isLoading)
    return (
      <div className="flex h-[90%] w-[100%] items-center justify-center ">
        <Spinner />
      </div>
    );
  return (
    <ul className="grid grid-cols-4 justify-center gap-[4rem] pt-[2rem]">
      {data.map((recipe) => (
        <RecipeList
          key={recipe.idMeal}
          image={recipe.strMealThumb}
          name={recipe.strMeal}
          id={recipe.idMeal}
        />
      ))}
    </ul>
  );
}
