import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Nav.css';
// import Cards from './Cards';

   
function Nav({onSearch, access}) {
   const location = useLocation();


   if (location.pathname === '/' || !access) {
      return null;
   }
   return (
      <nav className="nav">
         <Link className="nav-link" to="/about">About</Link>
         <Link className="nav-link" to="/home">Home</Link>
         <Link className="nav-link" to="/favorites">Favorites</Link>
         <div className="search-container">
         <SearchBar onSearch={onSearch} />
         </div>
      </nav>
   );
}


export default Nav;
