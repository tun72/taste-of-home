import RecipeByCountry from "./RecipeByCountry";
import RecipeCategory from "./RecipeCategory";
import RecipeItem from "./RecipeItem";

function Recipe() {
  return (
    <div className="grid-col-1 mt-[2rem] grid lg:grid-cols-[auto_1fr] gap-[5rem]">
      <RecipeCategory />
      <RecipeItem />
    </div>
  );
}

export default Recipe;
