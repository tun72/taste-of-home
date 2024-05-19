import styled, { css } from "styled-components";
import Heading from "./Heading";

const LeftFeatureIcon = styled.div`
  flex: 0 0 18rem;
  height: 18rem;
  background: #0de39d;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const RightFeatureIcon = styled.div`
  padding: 0 2rem;
  background: #0de39d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 36rem;
  border-radius: 10px;
  color: white;
`;

const FeatureLabel = styled.div`
  flex: auto;
  display: flex;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  color: #590c79;
  font-weight: 600;
`;

const Arrow = styled.span`
  width: 23vw;
  height: 2px;
  background: #590c79;
  display: inline-block;
  position: absolute;
  z-index: -1;
  top: 50%;
  transform: translateY(-50%);

  ${(props) =>
    props.type === "right" &&
    css`
      left: 0;
    `}

  ${(props) =>
    props.type === "left" &&
    css`
      right: 0;
    `}
`;

const Span = styled.span`
  display: block;
  font-size: 1.4rem;
  font-weight: 400;
  color: #615551;
`;
function ServiceSection() {
  return (
    <section className="w-full p-[8rem_7rem_8rem_7rem]" id="services">
      <Heading type="secondary">Service and feature</Heading>
      <div className="mt-[10rem] flex justify-evenly gap-[8rem]">
        <div className="flex  flex-[0_0_62%] flex-col">
          <div className="flex justify-between">
            <LeftFeatureIcon>
              <img
                src="./imgs/discussion.png"
                alt=""
                className="h-[50%] w-[50%]"
              />
              <Arrow type="right" />
            </LeftFeatureIcon>
            <FeatureLabel>
              <p>
                Buying ingredient <br />
                <Span>Explore our recipe website and easily purchase </Span>
                <Span>any food ingredient you need for a delicious meal.</Span>
              </p>
            </FeatureLabel>
          </div>
          <div className="flex justify-between">
            <FeatureLabel>
              <p>
                Search more than 1000 recipe <br />
                <Span>
                  Explore a world of delicious recipes for every palate,{" "}
                </Span>
                <Span>
                  with easy-to-follow instructions and step-by-step guides.
                </Span>
              </p>
            </FeatureLabel>
            <LeftFeatureIcon>
              <img src="./imgs/dish.png" alt="" className="h-[50%] w-[50%]" />
              <Arrow type="left" />
            </LeftFeatureIcon>
          </div>
        </div>
        <div className="flex-[0_0_20%]">
          <RightFeatureIcon>
            <img
              src="./imgs/delivery-man.png"
              alt=""
              className="h-[150px] w-[150px]"
            />
            <p className="mt-[1rem] text-[2rem] font-bold">
              Cash on Delivery...
            </p>
            <p className="mt-[1rem] text-center text-[1.4rem]">
              Skip the store and still enjoy homemade goodness. Try our recipes
              and get all the ingredients delivered for a seamless cooking
              experience
            </p>
          </RightFeatureIcon>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
