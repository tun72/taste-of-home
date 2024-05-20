import React from "react";
import { useRecipe } from "./useRecipe";
import Spinner from "../../ui/Spinner";
import RecipeList from "./RecipeList";
import { useSearchParams } from "react-router-dom";
import RecipeItem from "./RecipeItem";

export default function RecipeData() {
  const [searchParams] = useSearchParams();
  const country = searchParams.get("country");
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  const { data, isLoading } = useRecipe({ country, category, search });

  if (isLoading)
    return (
      <div className="flex h-[90%] w-[100%] items-center justify-center ">
        <Spinner />
      </div>
    );

  if (!data) return <RecipeItem />;

  return (
    <ul className="grid grid-cols-1 justify-center gap-[4rem] pt-[2rem] md:grid-cols-2 lg:grid-cols-3">
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
