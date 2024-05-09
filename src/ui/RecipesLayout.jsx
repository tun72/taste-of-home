import RecipeCategory from "../features/Recipes/RecipeCategory";
import RecipeByCountry from "../features/Recipes/RecipeByCountry"
function RecipesLayout({ children }) {
  return (
    <div className="relative mx-auto  grid max-w-[130rem] grid-cols-[auto_1fr] items-start gap-[6rem]">
     <RecipeByCountry />
      {/* <RecipeCategory /> */}
      {children}
    </div>
  );
}

export default RecipesLayout;
