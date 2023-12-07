import { Link } from "react-scroll";

function PopularCard({ title, description, image }) {
  return (
    <div className="intro-food__card">
      <div className="intro-food__background">
        <img src={image} alt="" className="intro-food__img" />
      </div>
      <div className="intro-food__text">
        <h3 className="intro-food__heading">{title}</h3>
        <p className="intro-food__body">{description}</p>
        <Link to="" className="intro-food__btn">
          Detail
        </Link>
      </div>
    </div>
  );
}

export default PopularCard;
