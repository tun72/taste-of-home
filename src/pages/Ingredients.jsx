import styled from "styled-components";
import IngredientMenu from "../features/ingredients/IngredientMenu";
import IngredientHeader from "../features/ingredients/IngredientHeader";
import Category from "../features/category/Category";

const StyledIngredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Ingredients() {
  return (
    <StyledIngredients className="mb-10 max-w-7xl gap-4">
      <Category />
      <div className="flex flex-col gap-5">
        <IngredientHeader />
        <IngredientMenu />
      </div>
    </StyledIngredients>
  );
}

export default Ingredients;
