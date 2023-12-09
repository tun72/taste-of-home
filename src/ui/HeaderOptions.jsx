import styled from "styled-components";
import UserAvatar from "./UserAvatar";
import { HiArrowRightOnRectangle} from "react-icons/hi2";
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
      <HiArrowRightOnRectangle />
    </StyledHeaderOption>
  );
}

export default HeaderOptions;
