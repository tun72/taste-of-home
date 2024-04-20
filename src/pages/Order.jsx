import styled from "styled-components";
import OrderForm from "../features/order/OrderForm";
import Heading from "../ui/Heading";
import OrderFormRows from "../features/order/OrderFormRows";
import OrderItems from "../features/order/OrderItems";

const OrderStyled = styled.div`
  width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 3rem;
`;

function Order() {
  return (
    <OrderStyled>
      <Heading as="h1">Checkout</Heading>
      <OrderFormRows />
      <OrderItems />
    </OrderStyled>
  );
}

export default Order;
