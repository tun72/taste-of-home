import Spinner from "../../ui/Spinner";
import IngredientSimilarList from "./IngredientSimilarList";
import { useIngredients } from "./useIngredients";

function IngredientSimilar() {
  const { isLoading, data } = useIngredients();

  if (isLoading) return;

  const { ingredients } = data;

  return (
    <section className="section-similar section-container">
      <h2 className="similar-title">Similar items you might like</h2>
      <span className="similar-caption">Base on Customer bought</span>

      <ul className="similar-container">
        {ingredients.map((ing) => (
          <IngredientSimilarList ingredient={ing} />
        ))}
      </ul>
    </section>
  );
}

export default IngredientSimilar;
