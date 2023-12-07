import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import IngredientMenuList from "./IngredientMenuList";
import { useIngredients } from "./useIngredients";

function IngredientMenu() {
  const { isLoading, data } = useIngredients();

  if (isLoading) return <Spinner />;

  const { ingredients, total } = data;

  return (
    <>
      {ingredients.length > 0 ? (
        <ul className="divide-y divide-stone-200 px-2">
          {ingredients.map((ingredient) => (
            <IngredientMenuList ingredient={ingredient} />
          ))}
        </ul>
      ) : (
        <p className="mt-7 font-semibold tracking-wider">
          No ingredients fount :)
        </p>
      )}
      <Pagination count={total} />
    </>
  );
}

export default IngredientMenu;
