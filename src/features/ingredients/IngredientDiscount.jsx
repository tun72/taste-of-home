import { Link } from "react-router-dom";

function IngredientDiscount() {
  return (
    <div class="mypopup">
      <span class="btn-close">X</span>
      <img
        src="https://previews.123rf.com/images/muzhik/muzhik1304/muzhik130400011/19312419-freshwater-fish-ide-on-a-white-background.jpg"
        alt=""
      />
      <Link href="ingredientDetail.html?4d0ff6d138a0f2b6a7f0d84">
        <div class="mypopup-detail">
          <h2 class="mypopup-title">New Discount</h2>
          <p class="mypopup-name">fish</p>
          <span class="mypopup-discount">20% discount only $10</span>
        </div>
      </Link>
    </div>
  );
}

export default IngredientDiscount;
