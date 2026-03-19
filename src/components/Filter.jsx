import './Filter.css';

const categories = [
  { title: "All" }, // added All button
  { title: "Programming" },
  { title: "AI" },
  { title: "Business Analysis" },
  { title: "Design & Creative" },
  { title: "Data Analysis" },
  { title: "Marketing & Sales" },
];

const Filter = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="categoriesFilterSection">
      <div className="categoriesHeader">
        <h4>Popular Categories</h4>
        <p>10+ Categories</p>
      </div>

      <div className="categoriesGrid">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`categoryCard ${selectedCategory === item.title ? 'active' : ''}`}
            onClick={() => onSelectCategory(item.title === "All" ? "" : item.title)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
