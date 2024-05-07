function SearchForm() {
  return (
    <div className="search__bar align-items-center">
      <form action="" className="search">
        <input type="text" className="search--input" placeholder="Search" />
        <button className="search--btn">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <button className="btn-sort">
        <i className="fas fa-sort-alpha-down"></i>
      </button>
    </div>
  );
}

export default SearchForm;
