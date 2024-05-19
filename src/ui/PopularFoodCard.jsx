import { Link } from "react-router-dom";
import styled from "styled-components";

const FoodCard = styled.div`
  flex: 0 0 26rem;
  height: 25rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
`;

const FoodIntro = styled.div`
  height: 25%;
  width: 100%;
  position: absolute;
  padding: 1.5rem;
  bottom: 0%;
  transition: all 0.3s;
  background: #0de39d;
  background: rgba(13, 227, 157, 0.8);
  backdrop-filter: blur(1px);
`;

const P = styled.p`
  font-size: 1.2rem;
  color: white;
  opacity: 0;
  letter-spacing: 0.1rem;
  transition: all 0.5s;
  cursor: pointer;
`;

const FoodBtn = styled(Link)`
  padding: 0.3rem 3.5rem;
  background-color: #f8f8f8;
  font-size: 1.4rem;
  border-radius: 20px 0 0 20px;
  font-weight: 600;
  display: inline-block;
  margin-left: auto;
  color: #0de39d;
  position: absolute;
  right: 0;
  bottom: 1rem;

  cursor: pointer;
`;
function PopularCard({ title, description, image }) {
  return (
    <FoodCard className="group shadow-md">
      <div className="h-full w-full">
        <img
          src={image}
          alt=""
          className="block h-full w-full rounded-[10px]  object-cover"
        />
      </div>
      <FoodIntro className="group-hover:h-[80%]">
        <h3 className="text-[1.8rem] font-bold text-white">{title}</h3>
        <P className="group-hover:opacity-[1]">{description}</P>

        <FoodBtn to="/recipes">Detail</FoodBtn>
      </FoodIntro>
    </FoodCard>
  );
}

export default PopularCard;
