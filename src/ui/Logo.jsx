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
  const src = "icons/logos.png";
  return (
    <StyledLogo>
      <Link to="/" className="text-center flex items-center">
        <Img src={src} alt="Logo" /> <h1 className="font-mono text-3xl italic text-[#0de39d]">Taste of Home</h1>
      </Link>
    </StyledLogo>
  );
}

export default Logo;
