function SkeletonLoding() {
  return (
    <div class="categories ml-4 mt-5">
      <div class="categories__slider">
        {Array.from({ length: 10 }).map((i) => (
          <div key={i} class="categories__slider--item">
            <div class="fade-img card-skeleton"></div>
            <p class="fade-text card-skeleton"></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkeletonLoding;
