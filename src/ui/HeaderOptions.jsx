import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import UserAvatar from "../features/authentication/UserAvatar";
import { useUser } from "../features/authentication/useUser";
import CartHeader from "../features/cart/CartHeader";
import SpinnerMini from "./SpinnerMini";
import DarkModeToggle from "./DarkModeToggle";
const StyledHeaderOption = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
function HeaderOptions() {
  const { user, isLoading } = useUser();

  if (isLoading)
    return (
      <div>
        <SpinnerMini />
      </div>
    );

  const { name } = user;

  return (
    <StyledHeaderOption>
      <CartHeader />
      <UserAvatar name={name} />
      <DarkModeToggle />
      <Logout />
    </StyledHeaderOption>
  );
}

export default HeaderOptions;
