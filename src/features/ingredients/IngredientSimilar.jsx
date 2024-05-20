import styled from "styled-components";
import IngredientSimilarList from "./IngredientSimilarList";
import { useIngredients } from "./useIngredients";

const IngredientSimilarLayout = styled.div`
  padding: 4rem 0;
  max-width: 84%;
  margin: 0 auto;
  overflow-x: scroll;
  margin-bottom: 4rem;
  margin-top: 4rem;

  &::-webkit-scrollbar {
    position: absolute;
    width: 8px;
    height: 8px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    background: transprant;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-brand-500);
    border-radius: 10px;
    transition: all 0.3s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-brand-500);
  }
`;
function IngredientSimilar() {
  const { isLoading, data } = useIngredients();

  if (isLoading) return;

  const { ingredients } = data;

  return (
    <IngredientSimilarLayout>
      <h2 className="text-[3rem] font-bold text-green-500 ">
        Similar items you might like
      </h2>
      <p className="mb-[4rem] ml-[0.5rem] text-[1.2rem] font-thin">
        Base on Customer bought
      </p>

      <ul className="flex items-center gap-[4rem] px-[2rem] ">
        {ingredients.map((ing, index) => (
          <IngredientSimilarList ingredient={ing} key={index} />
        ))}
      </ul>
    </IngredientSimilarLayout>
  );
}

export default IngredientSimilar;
