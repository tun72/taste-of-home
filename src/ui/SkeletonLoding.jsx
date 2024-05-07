function SkeletonLoding() {
  return (
    <div className="categories ml-4 mt-5">
      <div className="categories__slider">
        {Array.from({ length: 10 }).map((i) => (
          <div key={i} className="categories__slider--item">
            <div className="fade-img card-skeleton"></div>
            <p className="fade-text card-skeleton"></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkeletonLoding;
