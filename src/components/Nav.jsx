import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import Cards from './Cards';

// crearemos otro componente denominado Nav que será nuestra barra superior de navegación, el cual envolverá a la SearchBar.

   
function Nav({onSearch, access}) {
   const location = useLocation();


   if (location.pathname === '/' || !access) {
      return null;
   }
   return (
      <nav>
         <SearchBar onSearch={onSearch} />
         <Link to="/about">About</Link>
         <Link to="/home">Home</Link>
         <Link to="/favorites">Favorites</Link>
      </nav>
   );
}


export default Nav;
