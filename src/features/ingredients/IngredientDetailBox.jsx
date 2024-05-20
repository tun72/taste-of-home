import AddToCart from "../../ui/AddToCart";
import DetailInfo from "../../ui/DetailInfo";
import Rating from "../../ui/Rating";

import styled from "styled-components";
import Heading from "../../ui/Heading";

const StyledTag = styled.span`
  border: 1px solid #590c79;
  padding: 3px 4px;
`;

const Line = styled.div`
  border: 1px solid var(--color-grey-200);
`;

export const IngidientCard = styled.div`
  background: var(--color-grey-100);
  border: 1px solid var(--color-grey-400);
`;
function IngredientDetailBox({
  data: { name, price, _id, category, description, imageUrl, rating, quantity },
  type = 0,
}) {
  return (
    <>
      {type !== 1 ? (
        <IngidientCard className="rounded-[10px] p-[15px] shadow-2xl">
          <div className="mb-[1.8rem] flex items-center justify-start gap-[10px]">
            <StyledTag>{category}</StyledTag>
            <StyledTag>{rating > 5 ? "high rated" : "medium rated"}</StyledTag>
          </div>
          <h3 className="text-[2.2rem] font-semibold">{name}</h3>
          <Rating rating={rating} />
          <p className="mb-[1.8rem] text-[3rem] font-semibold">
            ${price}
            <span className="ml-4 text-[1.8rem] font-semibold">
              {description}
            </span>
          </p>
          <div className="mb-[1.8rem] text-[1.2rem] text-red-400 ">
            *This price is when you purchsed online*
          </div>
          <Line />
          <DetailInfo />
          <Line />
        </IngidientCard>
      ) : (
        <IngidientCard className="mt-[2rem] flex items-center gap-4 rounded-[10px] p-[2rem] shadow-2xl">
          <div className="h-[12rem] w-[12rem]">
            <img src={imageUrl} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            <Heading as="h3">{name}</Heading>
            <span className="text-[1.8rem]">
              <span className="text-[2.4rem] font-bold text-red-400">
                {quantity}
              </span>{" "}
              items left
            </span>
            <AddToCart name={name} price={price} id={_id} />
          </div>
        </IngidientCard>
      )}
    </>
  );
}

export default IngredientDetailBox;
