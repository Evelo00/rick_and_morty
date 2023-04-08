import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
   const [search, setSearch] = useState("");

   const handleChange = (event) => {
      setSearch(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(search);
   };

   return (
      <form className="search-bar" onSubmit={handleSubmit}>
         <input className="search-bar-input"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
         />
         <button className="search-bar-button" type="submit"><i class='bx bx-search-alt'></i></button>
      </form>
   );
};

export default SearchBar;

