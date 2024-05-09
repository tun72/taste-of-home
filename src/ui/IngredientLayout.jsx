import Category from "../features/category/Category";
import IngredientDiscount from "../features/ingredients/IngredientDiscount";

function IngredientLayout({ children }) {
  return (
    <div className="relative mx-auto  grid lg:max-w-[82%] md:max-w-[82%] max-w-[90%] lg:grid-cols-[auto_1fr]  grid-cols-1 items-start lg:gap-[6rem] gap-[1rem]">
      <Category />
      {children}
      {/* <IngredientDiscount /> */}
    </div>
  );
}

export default IngredientLayout;
