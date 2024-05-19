import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
    `}
    ${(props) =>
    (props.type === 
      "secondary" &&
      css`
        width: 20%;
        margin: 0 auto;
        border-left: 10px solid #0de39d;
        padding-left: 3rem;
        font-size: 3rem;
        font-weight: 700;
        text-transform: capitalize;
        width: 40rem;
        word-wrap: normal;
        color: #590c79;
        margin-bottom: 3rem;
      `)}
`;
export default Heading;
