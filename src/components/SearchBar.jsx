export default function SearchBar(props) {
   return (
      <div>
         <input type='text' placeholder='Search' value={props.search} />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
