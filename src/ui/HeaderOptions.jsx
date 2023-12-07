import styled from "styled-components";
import UserAvatar from "./UserAvatar";
import { HiShoppingCart } from "react-icons/hi2";
import CartHeader from "../features/cart/CartHeader";
const StyledHeaderOption = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
function HeaderOptions() {
  return (
    <StyledHeaderOption>
      <CartHeader />
      <UserAvatar />
    </StyledHeaderOption>
  );
}

export default HeaderOptions;
