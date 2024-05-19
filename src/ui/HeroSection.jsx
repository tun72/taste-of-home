import Heading from "./Heading";
import { useObserver } from "../context/ObserverContext";
import { useEffect, useRef, useState } from "react";
import { HiMapPin } from "react-icons/hi2";
import styled from "styled-components";
import Header from "./Header";
import Input from "./Input";
import Button from "./Button";

const StyledHeaderLayout = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const StyledHeroLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const HeaderLeft = styled.div`
  flex: 0 0 70%;
  height: 100%;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderRight = styled.div`
  flex: 0 0 30%;
  height: 100%;
  position: relative;
  background-color: #0de39d;
`;

const HeaderHeading = styled.div`
  margin-top: 2.5rem;
  display: inline-block;
  font-size: 3.2rem;
  margin-bottom: 20px;
  line-height: 4rem;
  color: #590c79;
  font-weight: 700;
`;

const HeaderForm = styled.form`
  background: #f8f8f8;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  box-shadow: 0 1px 10px #00000020;
`;

const StyledDish = styled.div`
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: -50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const StyledSalat = styled.div`
  width: 40rem;
  height: 40rem;
  position: absolute;
  top: 5%;
  left: 3%;
  z-index: 1;
  transform: translateX(-50%) rotate(9deg);
`;

const StyledDot = styled.div`
  position: absolute;
  top: 50%;
  left: -50%;
  transform: translateY(-50%);
`;

const Logo = styled.h1`
  opacity: 0.1;
  font-size: 8rem;
  position: absolute;
  z-index: 1;
  top: 27%;
  left: 19%;
  color: #590c79;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LocationTag = styled.div`
  position: absolute;
  left: 0;
  bottom: 10rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem 3rem 0.5rem 1rem;
  border-radius: 0 50px 50px 0;
  font-size: 1.5rem;
  background-color: #0de39d;
  color: #fff;
  z-index: 100;
`;
function HeroSection() {
  const { setIsIntersecting } = useObserver();
  const [search, setSearch] = useState("");
  const ref = useRef();

  useEffect(
    function () {
      if (!ref.current) {
        return;
      }
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(!entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0,
          rootMargin: `-${10}px`,
        },
      );
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    },
    [ref, setIsIntersecting],
  );

  function handelSearch() {
    setSearch("");
  }

  return (
    <StyledHeaderLayout className="header" ref={ref}>
      <Header ishome={"true"} />
      <StyledHeroLayout>
        <HeaderLeft>
          <div className="mt-[40px] flex-[0_0_45%]">
            <HeaderHeading>
              Discover Food Recipes & Shop Ingredients
            </HeaderHeading>
            <HeaderForm className="header__form">
              <Input
                type="text"
                placeholder="Search Food"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <Button
                type="submit"
                className="header__form--go-button bg-green-300"
                onClick={handelSearch}
              >
                Go
              </Button>
            </HeaderForm>
          </div>
        </HeaderLeft>
        <HeaderRight>
          <StyledDish className="header__dish">
            <img src="./imgs/header_photo.png" alt="" />
          </StyledDish>
          <StyledSalat className="img_salad">
            <img src="./imgs/heading_salad.png" alt="" />
          </StyledSalat>
          <StyledDot className="img_dot">
            <img src="./imgs/dots.png" alt="" />
          </StyledDot>
        </HeaderRight>
      </StyledHeroLayout>
      <Logo>FOOD</Logo>
      <LocationTag>
        <HiMapPin />
        Myanmar, AyeyarWaddy
      </LocationTag>
    </StyledHeaderLayout>
  );
}

export default HeroSection;
