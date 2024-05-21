import styled from "styled-components";
import OrderFormRows from "../features/order/OrderFormRows";

import Heading from "../ui/Heading";

const OrderStyled = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 0rem 6rem 0rem;
`;

function Order() {
  // const cart = useSelector(getCart);
  // let isCart = cart.ingredients.length !== 0;
  // if (!isCart) return <Error />;

  return (
    <OrderStyled>
      <Heading as="h1">Checkout</Heading>
      <OrderFormRows />
    </OrderStyled>
  );
}

export default Order;
