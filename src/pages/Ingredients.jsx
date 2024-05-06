import styled from "styled-components";
import IngredientMenu from "../features/ingredients/IngredientMenu";
import IngredientHeader from "../features/ingredients/IngredientHeader";

import IngredientLayout from "../ui/IngredientLayout";

const StyledIngredients = styled.div`
  display: flex;
  flex-direction: column;
`;

function Ingredients() {
  return (
    <IngredientLayout>
      <StyledIngredients className="mx-auto mb-10 w-full gap-4">
        <IngredientHeader />
        <IngredientMenu />
      </StyledIngredients>
    </IngredientLayout>
  );
}

export default Ingredients;
