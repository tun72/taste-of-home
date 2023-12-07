import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(Link)`
  text-align: center;
`;

const Img = styled.img`
  height: 6rem;
  width: auto;
`;

function Logo() {
  const src = "./icons/logos.png";
  return (
    <StyledLogo to="/">
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
