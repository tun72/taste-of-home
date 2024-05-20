import { useSelector } from "react-redux";
import AddToCart from "../../ui/AddToCart";
import DetailInfo from "../../ui/DetailInfo";
import Rating from "../../ui/Rating";
import { useEffect } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

const StyledTag = styled.span`
  border: 1px solid #590c79;
  padding: 3px 4px;
`;

const Line = styled.div`
  border: 1px solid var(--color-grey-200);
`;

function IngredientDetailBox({
  data: { name, price, _id, category, description, imageUrl, rating, quantity },
  type = 0,
}) {
  return (
    <>
      {type !== 1 ? (
        <div className="rounded-[10px] p-[15px] shadow-2xl">
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
          <div className="mb-[1.8rem] text-[1.6rem]">
            price when you purchsed online
          </div>
          <Line />
          <DetailInfo />
          <Line />
        </div>
      ) : (
        <div className="detail-box box-1">
          <div className="detail-box__img">
            <img src={imageUrl} alt="" />
          </div>
          <div className="detail-box__data">
            <h3 className="detail-box__name">{name}</h3>
            <span className="detail-box__quantity">
              Only <span>${quantity}</span> items left
            </span>
            <AddToCart name={name} price={price} id={_id} />
          </div>
        </div>
      )}
    </>
  );
}

export default IngredientDetailBox;
