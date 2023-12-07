

function ServiceSection() {
  return (
    <section className="section-feature h-full container" id="services">
      <h2 className="secondary__heading">Service and feature</h2>
      <div className="feature">
        <div className="feature__left">
          <div className="feature__1">
            <div className="feature-icon">
              <img src="./imgs/discussion.png" alt="" />
              <span className="arrow arrow__right"></span>
            </div>
            <div className="feature-label">
              <p>
                Buying ingredient <br />
                <span>Explore our recipe website and easily purchase </span>
                <span>any food ingredient you need for a delicious meal.</span>
              </p>
            </div>
          </div>
          <div className="feature__2">
            <div className="feature-label">
              <p>
                Search more than 1000 recipe <br />
                <span>
                  Explore a world of delicious recipes for every palate,{" "}
                </span>
                <span>
                  with easy-to-follow instructions and step-by-step guides.
                </span>
              </p>
            </div>
            <div className="feature-icon">
              <img src="./imgs/dish.png" alt="" />
              <span className="arrow arrow__left"></span>
            </div>
          </div>
        </div>
        <div className="feature__right">
          <div className="feature__3">
            <div className="feature-icon">
              <img src="./imgs/delivery-man.png" alt="" />
              <p className="feature-caption">Cash on Delivery...</p>
              <p className="feature-text">
                Skip the store and still enjoy homemade goodness. Try our
                recipes and get all the ingredients delivered for a seamless
                cooking experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
