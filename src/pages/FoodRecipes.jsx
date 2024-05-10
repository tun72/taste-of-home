import Recipe from "../features/Recipes/Recipe";
import RecipeByCountry from "../features/Recipes/RecipeByCountry";
import RecipesLayout from "../ui/RecipesLayout";

function FoodRecipes() {
  return (
    <RecipesLayout>
      <RecipeByCountry />
      <Recipe />
    </RecipesLayout>
  );
}

export default FoodRecipes;
