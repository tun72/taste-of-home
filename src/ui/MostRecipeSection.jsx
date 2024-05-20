import styled from "styled-components";
import Heading from "./Heading";

import { BiFoodMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useRecipe } from "../features/Recipes/useRecipe";
import MealLoading from "./MealLoading";

export const MealLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
  transition: all 1s ease;
  width: 100%;
`;

export const MealCard = styled.div`
  position: relative;
  flex: 0 0 24rem;
  height: 25rem;
  border-radius: 100px;
`;

export const MealData = styled.div`
  background: #fff;
  border-radius: 2rem;
  position: absolute;
  width: 102%;
  bottom: -4%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  padding: 1.5rem 2rem 1.5rem 2rem;
  box-shadow: 0px 25px 80px rgba(0, 0, 0, 0.15);
`;

const MealDetailBtn = styled(Link)`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0de39d;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  box-shadow: 0px 25px 80px rgba(0, 0, 0, 0.15);
  color: #fff;
  font-weight: 600;
`;
function MostRecipeSection() {
  let { data: meals, isLoading } = useRecipe({ country: "American" });

  if (isLoading) return <MealLoading />;



  meals = meals.slice(1, 9);

  return (
    <section className="mx-auto w-full p-[8rem_7rem_8rem_7rem]">
      <div className="mb-[10rem]">
        <Heading type="secondary">Most Popular Recipes</Heading>
      </div>

      <MealLayout>
        {meals.map((meal, index) => (
          <MealCard key={index}>
            <img
              src={meal.strMealThumb}
              alt=""
              className="h-[100%] w-[100%] rounded-[2rem] object-cover"
            />
            <MealData>
              <Heading as={"h3"} className="line-clamp-1" >{meal.strMeal}</Heading>
              <div className="mt-[1rem] flex items-center justify-between">
                <p>American</p>
                <MealDetailBtn to="/recipes?country=American">
                  <BiFoodMenu />
                </MealDetailBtn>
              </div>
            </MealData>
          </MealCard>
        ))}
      </MealLayout>
    </section>
  );
}

export default MostRecipeSection;
