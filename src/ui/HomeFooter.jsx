import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { HiAcademicCap } from "react-icons/hi2";
import { BiCopyright } from "react-icons/bi";
const FooterSearch = styled.div`
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterInputLayout = styled.div`
  display: flex;
  width: 40rem;
  background-color: aliceblue;
  padding-left: 1rem;
  border-radius: 4px;
  margin-bottom: 7px;
`;

const FirstLine = styled.div`
  width: 90%;
  height: 0.1px;
  margin: 0 auto;
  background-color: rgba(245, 245, 245, 0.582);
`;
const SecondLine = styled.div`
  width: 80%;
  height: 0.1px;
  background-color: rgba(245, 245, 245, 0.582);
  margin: 0 auto;
`;

const FooterSubHeading = styled.h4`
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.15rem;
  position: relative;
  margin-bottom: 3rem;
`;

const Ul = styled.ul`
  list-style: none;
  text-align: left;
`;

const Li = styled.li`
  text-align: left;
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.712);
`;
export default function HomeFooter() {
  return (
    <footer className="h-[500px] w-full bg-black" id="footer">
      <div className="footer">
        <FooterSearch>
          <h2 className="text-[1.6rem] font-semibold text-[#590c79]">
            subscribe
          </h2>

          <div>
            <FooterInputLayout>
              <input
                type="text"
                className="flex-1 border-[0] bg-transparent outline-0"
                placeholder="Enter Your Review"
              />
              <Button>Submit</Button>
            </FooterInputLayout>
            <p className="text-[1.2rem] text-white">Write your review</p>
          </div>
        </FooterSearch>

        <FirstLine />

        <div className="flex justify-around p-[3rem_10rem]">
          <div className="flex-[25%]">
            <img
              src="icons/logos.png"
              className="w-[10rem] fill-[#590c79]"
              alt=""
            />
          </div>

          <div className="flex-[25%]">
            <FooterSubHeading>PRODUCT</FooterSubHeading>
            <Ul>
              <Li>
                <Link to="#">How It Work</Link>
              </Li>
              <Li>
                <Link to="#">Features</Link>
              </Li>
              <Li>
                <Link to="#">Service</Link>
              </Li>
              <Li>
                <Link to="#">Pricing</Link>
              </Li>
            </Ul>
          </div>

          <div className="flex-[25%]">
            <FooterSubHeading>USEFUL PAGES</FooterSubHeading>
            <Ul>
              <Li>
                <Link to="/">Home</Link>
              </Li>
              <Li>
                <Link to="">About</Link>
              </Li>
              <Li>
                <Link to="">Services</Link>
              </Li>
              <Li>
                <Link to="">Contact Us</Link>
              </Li>
            </Ul>
          </div>

          <div className="flex-[25%]">
            <FooterSubHeading>CONTACT INFO</FooterSubHeading>
            <Ul>
              <Li>
                + Yangon, Tharkayta
                <br />
                Myanamr
              </Li>
              <Li>+ hello@Group3.gmail.com</Li>
              <Li>+ 959 40 800 4299</Li>
            </Ul>
          </div>
        </div>

        <SecondLine />
        <p className="mt-[2rem] flex items-center justify-center gap-1 text-center text-gray-300">
          <BiCopyright /> 2024 Group 3 project. Developed by
          <Link
            to="https://github.com/Tun72"
            className="text-green-400 hover:underline"
          >
            ttm
          </Link>
          😊
        </p>
      </div>
    </footer>
  );
}
