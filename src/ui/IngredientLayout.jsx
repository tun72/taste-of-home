import CartCategory from "../features/cart/CartCategory";
import IngredientDiscount from "../features/ingredients/IngredientDiscount";

function IngredientLayout({ children }) {
  return (
    <div className="relative mx-auto  grid max-w-[90%] grid-cols-1 items-start gap-[1rem]  md:max-w-[82%] lg:max-w-[82%] lg:grid-cols-[auto_1fr] lg:gap-[6rem]">
      <CartCategory />
      {children}
      {/* <IngredientDiscount /> */}
    </div>
  );
}

export default IngredientLayout;
