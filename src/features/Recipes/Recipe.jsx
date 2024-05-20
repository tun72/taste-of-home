import RecipeCategory from "./RecipeCategory";
import RecipeData from "./RecipeData";
import RecipeItem from "./RecipeItem";

function Recipe() {
  return (
    <div className="grid-col-1 mt-[2rem] grid lg:grid-cols-[1fr_auto] gap-[5rem]">
      <RecipeData />
      <RecipeCategory />
    </div>
  );
}

export default Recipe;
