import { FaStar } from "react-icons/fa";
import "./FilterSidebar.css";

const FilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  setMinRating,
  clearFilters,
  highestPrice
}) => {
  const categories = [
    "All",
    "Fruits & Vegetables",
    "Dairy & Eggs",
    "Bakery & Breads",
    "Rice, Atta & Grains",
    "Dals & Pulses",
    "Oil & Ghee",
    "Dry Fruits & Nuts",
    "Sweets & Chocolates"
  ];

  return (
    <div className="sidebar">
      <h3>Categories</h3>

      <ul>
        {categories.map((cat, index) => (
          <li
            key={index}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>

      <h3>Max Price: ₹{maxPrice}</h3>

      <input
        type="range"
        min="0"
        max={highestPrice}
        step="50"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />

      <h3>Customer Ratings</h3>

      <div className="rating-filter">
        <label className="rating-option">
          <input
            type="checkbox"
            name="rating"
            onChange={() => setMinRating(4)}
          />
          <span className="rating-text">
            4 <FaStar className="star-icon" /> & above
          </span>
        </label>

        <label className="rating-option">
          <input
            type="checkbox"
            name="rating"
            onChange={() => setMinRating(3)}
          />
          <span className="rating-text">
            3 <FaStar className="star-icon" /> & above
          </span>
        </label>

        <label className="rating-option">
          <input
            type="checkbox"
            name="rating"
            onChange={() => setMinRating(2)}
          />
          <span className="rating-text">
            2 <FaStar className="star-icon" /> & above
          </span>
        </label>

        <label className="rating-option">
          <input
            type="checkbox"
            name="rating"
            onChange={() => setMinRating(1)}
          />
          <span className="rating-text">
            1 <FaStar className="star-icon" /> & above
          </span>
        </label>
      </div>

      <button className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSidebar;