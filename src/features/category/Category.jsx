import { HiArrowDownCircle } from "react-icons/hi2";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SidebarCategory = styled.div`
  padding: 1rem 2rem 2rem 2rem;
  margin-bottom: 1rem;
  border-radius: var(--border-radius-md);
  background: var(--color-grey-100);
  border: 1px solid var(--color-grey-400);

  height: 30rem;
  overflow-y: scroll;
  padding-bottom: 15px;
  font-size: var(--fs-6);

  &::-webkit-scrollbar {
    position: absolute;
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transprant;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-brand-500);
    border-radius: 10px;
    transition: all 0.3s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-brand-500);
  }
`;
function Category({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) setIsOpen(false);
      if (window.innerWidth > 1000) setIsOpen(true);
    };
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handelCategoryOpen() {
    if (window.innerWidth < 1000) setIsOpen((prev) => !prev);
  }

  return (
    <div
      className="static w-[100%] md:w-[50%] lg:sticky lg:w-[35rem]"
      data-mobile-menu
    >
      <h2
        className="mb-[1.2rem] flex select-none items-center justify-between rounded-[1rem] bg-[#0de39d] p-[1.2rem]  text-white"
        onClick={handelCategoryOpen}
      >
        Categories
        <HiArrowDownCircle className="cursor-pointer text-3xl" />
      </h2>

      {isOpen && <SidebarCategory>{children}</SidebarCategory>}
    </div>
  );
}

export default Category;
