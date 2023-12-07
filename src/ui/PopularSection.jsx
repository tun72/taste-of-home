import PopularCard from "./PopularCard";

const items = [
  {
    id: "1",
    title: "Italian Pizza",
    description: `Delight in the sensational taste of our pizzas, crafted with the
    finest ingredients and baked to golden perfection, ensuring each
    slice is a masterpiece of flavor.`,
    image: "/imgs/pizza.jpg",
  },
  {
    id: "2",
    title: "Italian Pizza",
    description: `Delight in the sensational taste of our pizzas, crafted with the
    finest ingredients and baked to golden perfection, ensuring each
    slice is a masterpiece of flavor.`,
    image: "/imgs/pizza.jpg",
  },
  {
    id: "3",
    title: "Italian Pizza",
    description: `Delight in the sensational taste of our pizzas, crafted with the
    finest ingredients and baked to golden perfection, ensuring each
    slice is a masterpiece of flavor.`,
    image: "/imgs/pizza.jpg",
  },
  {
    id: "4",
    title: "Italian Pizza",
    description: `Delight in the sensational taste of our pizzas, crafted with the
    finest ingredients and baked to golden perfection, ensuring each
    slice is a masterpiece of flavor.`,
    image: "/imgs/pizza.jpg",
  },
];
function PopularSection() {
  return (
    <section className="section-intro h-50" id="popular food">
      <h2 className="secondary__heading">Popular dishes</h2>
      <div className="intro-food mt-5">
        {items.map(({ title, id, description, image }) => {
          return (
            <PopularCard title={title} description={description} image={image} key={id} />
          );
        })}

        <div className="intro-food__seemore">
          <img src="./imgs/donut.png" alt="" />
          <a href="rescipeMainpage.html">See More</a>
        </div>
      </div>
    </section>
  );
}

export default PopularSection;
