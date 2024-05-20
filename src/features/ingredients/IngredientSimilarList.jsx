import { HiEye } from "react-icons/hi2";
import Rating from "../../ui/Rating";
import { Link } from "react-router-dom";
import Heading from "../../ui/Heading";
import AddToCart from "../../ui/AddToCart";
import styled from "styled-components";

export const IngidientSimilarCard = styled.li`
  background: var(--color-grey-100);
  border: 1px solid var(--color-grey-400);
`;

function IngredientSimilarList({
  ingredient: { name, imageUrl, price, rating, _id },
}) {
  return (
    <IngidientSimilarCard className="flex-[0_0_30rem]  rounded-[2rem] shadow-2xl">
      <Link to={"/ingredient/" + _id}>
        <div className="h-[20rem] w-full flex items-center justify-center">
          <img
            src={imageUrl}
            alt={name}
            className="h-[90%] w-[90%] object-cover rounded-[1rem] "
          />
        </div>
        <div className="h-[50%] w-full p-[2rem]">
          <p className="text-[2rem] text-green-400">${price}</p>
          <Heading as="h3">{name}</Heading>
          <Rating rating={rating} />
          <AddToCart id={_id} />
        </div>
      </Link>
    </IngidientSimilarCard>
  );
}

export default IngredientSimilarList;
