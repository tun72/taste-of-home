import { Link } from "react-router-dom";

function IngredientDiscount() {
  return (
    <div className="mypopup">
      <span className="btn-close">X</span>
      <img
        src="https://previews.123rf.com/images/muzhik/muzhik1304/muzhik130400011/19312419-freshwater-fish-ide-on-a-white-background.jpg"
        alt=""
      />
      <Link href="ingredientDetail.html?4d0ff6d138a0f2b6a7f0d84">
        <div className="mypopup-detail">
          <h2 className="mypopup-title">New Discount</h2>
          <p className="mypopup-name">fish</p>
          <span className="mypopup-discount">20% discount only $10</span>
        </div>
      </Link>
    </div>
  );
}

export default IngredientDiscount;
