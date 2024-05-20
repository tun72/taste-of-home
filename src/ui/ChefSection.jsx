import { HiChevronUp } from "react-icons/hi2";
import styled from "styled-components";
import Heading from "./Heading";

const StyledChefLayout = styled.section`
  margin-bottom: 4rem;
  position: relative;
`;

const ChefContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
`;

const ChefCard = styled.div`
  position: relative;
  height: 36rem;
  flex: 0 0 36rem;
  overflow: hidden;
  border-radius: 40px;
  object-fit: cover;
`;

const Text = styled.div`
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 20px;
  padding-top: 8rem;
  background: #0de39c92;
  transition: 0.5s;
  color: #fff;
`;

const chefs = [
  {
    id: 1,
    name: "Gordon Ramsay",
    about:
      "Gordon Ramsay is a chef, restaurateur, television personality and writer who once held 22 Michelin stars across 16 restaurants.",
    image: "./imgs/chefs/chef1.jpg",
  },
  {
    id: 2,
    name: "Thomas Keller",
    about:
      "Thomas Keller, an American chef, has seven stars 6 of which he has constantly held.",
    image: "./imgs/chefs/chef2.jpg",
  },
  {
    id: 3,
    name: "Emeril Lagasse",
    about:
      "Emeril John Lagassé III is an American celebrity chef, restaurateur, television personality, cookbook author, and National Best Recipe award winner for his ... Cooking style.",
    image: "./imgs/chefs/chef3.jpg",
  },
  {
    id: 4,
    name: "Gordon Ramsay",
    about:
      "James Trevor Oliver MBE OSI is a British restaurateur and cookbook author. He is known for his casual approach to cuisine, which has led him to front numerous television shows and open many restaurants.",
    image: "./imgs/chefs/chef4.jpg",
  },
  {
    id: 5,
    name: "Marco Pierre White",
    about:
      "Marco Pierre White is a British chef, restaurateur, and television personality. He has been dubbed the first celebrity chef and the enfant terrible of the UK restaurant scene.",
    image: "./imgs/chefs/chef5.jpg",
  },
  {
    id: 6,
    name: "Alain Ducasse",
    about:
      "Alain Ducasse is a French-born Monégasque chef. He operates a number of restaurants including Alain Ducasse at The Dorchester which holds three stars in the Michelin Guide.",
    image: "./imgs/chefs/chef6.jpg",
  },
];
function ChefSection() {
  function scrollToTop() {
    
  }
  return (
    <StyledChefLayout className="mx-auto max-w-[80%]">
      <div className="mb-[10rem]">
        <Heading type="secondary">Top Chefs in support</Heading>
      </div>
      <ChefContainer>
        {chefs.map((chef) => (
          <ChefCard className="group" id={chef.id}>
            <img
              src={chef.image}
              alt=""
              className="h-full w-full object-cover"
            />
            <Text className="group-hover:top-[0]">
              <h2 className="select-none text-[2rem]">{chef.name}</h2>
              <p className="m-[0.4rem_0_1rem] select-none text-[1.4rem]">
                {chef.about}
              </p>
            </Text>
          </ChefCard>
        ))}
      </ChefContainer>

      <div
        className="ml-auto mt-[-2rem] flex h-[5rem] w-[5rem] animate-bounce cursor-pointer items-center justify-center rounded-full bg-green-400 text-white shadow-md"
        onClick={() => scrollToTop()}
      >
        <HiChevronUp className="text-[3rem] font-bold" />
      </div>
    </StyledChefLayout>
  );
}

export default ChefSection;
