
import RecipeByCountry from "../features/Recipes/RecipeByCountry"
function RecipesLayout({ children }) {
  return (
    <div className="relative max-w-[90%] mx-auto md:max-w-[82%] lg:max-w-[82%]">
      {children}
    </div>
  );
}

export default RecipesLayout;
