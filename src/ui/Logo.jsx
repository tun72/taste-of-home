import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 6rem;
  width: auto;
`;

function Logo() {
  const src = "./icons/logos.png";
  return (
    <StyledLogo>
      <Link to="/" className="inline-block text-center">
        <Img src={src} alt="Logo" />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
