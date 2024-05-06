import Category from "../features/category/Category";
import IngredientDiscount from "../features/ingredients/IngredientDiscount";

function IngredientLayout({ children }) {
  return (
    <div className="relative mx-auto  grid max-w-[130rem] grid-cols-[auto_1fr] items-start gap-[6rem]">
      <Category />
      {children}
      <IngredientDiscount />
    </div>
  );
}

export default IngredientLayout;
