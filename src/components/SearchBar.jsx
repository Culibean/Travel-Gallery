import "./SearchBar.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search for your favourite travel images..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {/* <button>Search</button> */}
    </div>
  );
}
