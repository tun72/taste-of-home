import styled from "styled-components";
import IngredientMenu from "../features/ingredients/IngredientMenu";
import IngredientHeader from "../features/ingredients/IngredientHeader";
import Category from "../features/category/Category";

const StyledIngredients = styled.div`
  display: flex;
  flex-direction: column;
`;

function Ingredients() {
  return (
    <div className="mx-auto grid max-w-[140rem] grid-cols-[auto_1fr] items-start gap-[6rem] relative">
      <Category />
      <StyledIngredients className="mx-auto mb-10 w-full gap-4">
        <IngredientHeader />
        <IngredientMenu />
      </StyledIngredients>
    </div>
  );
}

export default Ingredients;
