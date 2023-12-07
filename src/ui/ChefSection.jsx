function ChefSection() {
  return (
    <section className="chefs section-container" id="chefs">
      <div className="chefs_heading">
        <h2 className="customer__title">Top Chefs in support</h2>
      </div>
      <div className="chefs-container">
        <div className="chef-box">
          <img src="./imgs/chefs/chef1.jpg" alt="" />
          <div className="text">
            <h2>Gordon Ramsay</h2>
            <p>
              Gordon Ramsay is a chef, restaurateur, television personality and
              writer who once held 22 Michelin stars across 16 restaurants.
            </p>
          </div>
        </div>
        <div className="chef-box">
          <img src="./imgs/chefs/chef2.jpg" alt="" />
          <div className="text">
            <h2>Thomas Keller</h2>
            <p>
              Thomas Keller, an American chef, has seven stars 6 of which he has
              constantly held.
            </p>
          </div>
        </div>
        <div className="chef-box">
          <img src="./imgs/chefs/chef3.jpg" alt="" />
          <div className="text">
            <h2>Emeril Lagasse</h2>
            <p>
              Emeril John Lagassé III is an American celebrity chef,
              restaurateur, television personality, cookbook author, and
              National Best Recipe award winner for his ... Cooking style.
            </p>
          </div>
        </div>
        <div className="chef-box">
          <img src="./imgs/chefs/chef4.jpg" alt="" />
          <div className="text">
            <h2>Jamie Oliver</h2>
            <p>
              James Trevor Oliver MBE OSI is a British restaurateur and cookbook
              author. He is known for his casual approach to cuisine, which has
              led him to front numerous television shows and open many
              restaurants.
            </p>
          </div>
        </div>
        <div className="chef-box">
          <img src="./imgs/chefs/chef5.jpg" alt="" />
          <div className="text">
            <h2>Marco Pierre White</h2>
            <p>
              Marco Pierre White is a British chef, restaurateur, and television
              personality. He has been dubbed "the first celebrity chef" and the
              enfant terrible of the UK restaurant scene.
            </p>
          </div>
        </div>
        <div className="chef-box">
          <img src="./imgs/chefs/chef6.jpg" alt="" />
          <div className="text">
            <h2>Alain Ducasse</h2>
            <p>
              Alain Ducasse is a French-born Monégasque chef. He operates a
              number of restaurants including Alain Ducasse at The Dorchester
              which holds three stars in the Michelin Guide.
            </p>
          </div>
        </div>
      </div>

      <div className="up-popup">
        <a href="#">
          <ion-icon name="chevron-up-outline"></ion-icon>
        </a>
      </div>
    </section>
  );
}

export default ChefSection;
