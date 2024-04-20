import styled from "styled-components";
import IngredientMenu from "../features/ingredients/IngredientMenu";
import IngredientHeader from "../features/ingredients/IngredientHeader";
import Category from "../features/category/Category";
import IngredientDiscount from "../features/ingredients/IngredientDiscount";

const StyledIngredients = styled.div`
  display: flex;
  flex-direction: column;
`;

function Ingredients() {
  return (
    <div className="mx-auto grid max-w-[130rem] grid-cols-[auto_1fr] items-start gap-[6rem] relative">
      <Category />
      <StyledIngredients className="mx-auto mb-10 w-full gap-4">
        <IngredientHeader />
        <IngredientMenu />
      </StyledIngredients>
      <IngredientDiscount />
      
    </div>
  );
}

export default Ingredients;
