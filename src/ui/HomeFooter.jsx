function HomeFooter() {
  return (
    <footer className="section-footer" id="footer">
      <div className="footer">
        <div className="footer__search">
          <h2>subscribe</h2>

          <div>
            <div className="footer__search--input">
              <input type="text" placeholder="Enter Your Review" />
              <button>Submit</button>
            </div>
            <p>Write your review</p>
          </div>
        </div>

        <div className="footer--firstLine"></div>

        <div className="footer__info">
          <div className="col-4">
            <img src="./asset/images/icons/food1.svg" alt="" className="food_svg" />
          </div>

          <div className="col-4">
            <h4>PRODUCT</h4>
            <ul>
              <li>
                <a href="#">How It Work</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h4>USEFUL PAGES</h4>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="About.html">About</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="Contact_us.html">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h4>CONTACT INFO</h4>
            <ul>
              <li>
                + Ayeyarwadi Region, Maubin
                <br />
                Myanamr
              </li>
              <li>+ hello@Group3.gmail.com</li>
              <li>+ 959 40 800 4299</li>
            </ul>
          </div>
        </div>

        <div className="footer--secondLine"></div>
        <p className="description">&copy 2023 Group 3 project</p>
      </div>
    </footer>
  );
}

export default HomeFooter;
