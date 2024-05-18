import React from "react";
import { useRecipe } from "./useRecipe";
import Spinner from "../../ui/Spinner";
import RecipeList from "./RecipeList";

export default function RecipeData({ country, category }) {
  const { data, isLoading } = useRecipe({ country, category });

  if (isLoading)
    return (
      <div className="flex h-[90%] w-[100%] items-center justify-center ">
        <Spinner />
      </div>
    );

    console.log(data);
  return (
    <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 justify-center gap-[4rem] pt-[2rem]">
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
