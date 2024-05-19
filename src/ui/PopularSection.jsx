import styled from "styled-components";
import PopularFoodCard from "./PopularFoodCard";
import Heading from "./Heading";
import { Link } from "react-router-dom";

const items = [
  {
    id: "1",
    title: "Italian Pizza",
    description: `Delight in the sensational taste of our pizzas, crafted with the
    finest ingredients and baked to golden perfection, ensuring each
    slice is a masterpiece of flavor.`,
    image: "/imgs/pizza.jpg",
  },
  {
    id: "2",
    title: "Cheese Burger",
    description: ` Join us today to satisfy your cravings and elevate your taste buds
    with every delectable bite. Your perfect burger moment awaits!"`,
    image: "/imgs/cheese_burger2.jpg",
  },
  {
    id: "3",
    title: "Grain Fed Beef",
    description: ` Discover pure gastronomic delight with our roast beef, where
    premium cuts are meticulously seasoned and slow-cooked to
    perfection, delivering an explosion of flavor with every tender
    bite`,
    image: "/imgs/steak1.jpg",
  },
  {
    id: "4",
    title: "Pancake",
    description: `Elevate your breakfast experience with our pancakes, where every
    stack is a masterpiece that embodies the warmth and satisfaction
    of a homemade delight, designed to make your taste buds dance.`,
    image: "/imgs/pan_cake.jpg",
  },
];

const StyledPopularLayout = styled.div`
  padding: 10rem 0 0rem 2rem;
  position: relative;
  background-color: #f8f8f8;
  margin-bottom: 2rem;
`;

const FoodLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin: 5rem 0;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SeeMore = styled.div`
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function PopularSection() {
  return (
    <StyledPopularLayout>
      <Heading type="secondary">Popular dishes</Heading>
      <FoodLayout>
        {items.map(({ title, id, description, image }) => {
          return (
            <PopularFoodCard
              title={title}
              description={description}
              image={image}
              key={id}
            />
          );
        })}

        <SeeMore>
          <img
            src="./imgs/donut.png"
            alt=""
            className="mb-[1rem] h-[70px] w-[70px] animate-spin"
          />
          <Link className="text-[1.6rem] font-semibold uppercase text-[#0de39d]">
            See More
          </Link>
        </SeeMore>
      </FoodLayout>
    </StyledPopularLayout>
  );
}

export default PopularSection;
