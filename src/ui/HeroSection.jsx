
import Heading from "./Heading";
import { useObserver } from "../context/ObserverContext";
import { useEffect, useRef, useState } from "react";
import { HiMapPin } from "react-icons/hi2";
function HeroSection() {
  const { setIsIntersecting } = useObserver();
  const [search, setSearch] = useState("");
  const ref = useRef()
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
    <section className="header" ref={ref}>
      <div className="header__main">
        <div className="header__left">
          <div className="header__content">
            <Heading as="h1" className="mb-2">
              Discover Food Recipes & Shop Ingredients
            </Heading>
            <div className="header__form">
              <input
                type="text"
                placeholder="Search Food"
                className="header__form--input"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button
                type="submit"
                className="header__form--go-button bg-green-300"
                onClick={handelSearch}
              >
                Go
              </button>
            </div>
          </div>
        </div>
        <div className="header__right">
          <div className="header__dish">
            <img src="./imgs/header_photo.png" alt="" />
          </div>
          <div className="img_salad">
            <img src="./imgs/heading_salad.png" alt="" />
          </div>
          <div className="img_dot">
            <img src="./imgs/dots.png" alt="" />
          </div>
        </div>
      </div>
      <h1 className="logo__name">
        FOOD <span className="logo__circle logo__circle-1"></span>
        <span className="logo__circle logo__circle-2"></span>
      </h1>
      <div className="mytag">
        <HiMapPin />
        Myanmar, AyeyarWaddy
      </div>
    </section>
  );
}

export default HeroSection;
