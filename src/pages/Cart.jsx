import styled from "styled-components";
import CartData from "../features/cart/CartData";

const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
  max-width: 80rem;
`;
function Cart() {
  return <StyledCart>
    <CartData />
  </StyledCart>;
}

export default Cart;
