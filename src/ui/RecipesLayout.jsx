import RecipeCategory from "../features/Recipes/RecipeCategory";

function RecipesLayout({ children }) {
  return (
    <div className="relative mx-auto  grid max-w-[130rem] grid-cols-[auto_1fr] items-start gap-[6rem]">
      <RecipeCategory />
      {children}
    </div>
  );
}

export default RecipesLayout;
