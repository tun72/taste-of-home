import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useCart } from "../../context/CartContext";
import { useReducer } from "react";
import { Button } from "react-scroll";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";

const OrderStyled = styled.div`
  background: var(--color-grey-100);
`;

function OrderShortCap() {
  const { ingredients } = useCart();

  const quantity = ingredients.reduce((prev, curr) => curr.quantity + prev, 0);
  const price = ingredients.reduce(
    (prev, curr) => curr.price * curr.quantity + prev,
    0,
  );

  if(ingredients.length === 0) {
       return <></>
  }
  console.log(ingredients);
  return (
    <OrderStyled className="rounded-lg p-5 text-center">
      <div className="flex items-center justify-between">
        <p>
          {quantity} tems {formatCurrency(price)}
        </p>
        <Link className="text-green-400 flex gap-4 items-center" to="/cart">open cart <HiArrowRight /></Link>
      </div>
    </OrderStyled>
  );
}

export default OrderShortCap;
