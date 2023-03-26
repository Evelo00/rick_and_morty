import { useState } from "react";

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
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
         />
         <button type="submit">Search</button>
      </form>
   );
};

export default SearchBar;

