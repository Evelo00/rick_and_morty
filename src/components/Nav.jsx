import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

// crearemos otro componente denominado Nav que será nuestra barra superior de navegación, el cual envolverá a la SearchBar.

function Nav({onSearch}) {
   return (
      <nav>
         <SearchBar onSearch={onSearch} />
         <Link to="/about">About</Link>
         <Link to="/">Home</Link>
      </nav>
   );
}


export default Nav;
