import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter your name"
        className="animated pulse"
      ></input>
      <button className="submit-button">Submit</button>
    </div>
  );
}

export { SearchBar };
