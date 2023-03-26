import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Form from './components/Form.jsx';
// import Home from './components/Home.jsx';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';


function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('No se encontró el personaje');
      }
    });
  }


  function onClose(id) {
    const parsedId = parseInt(id);
    const filteredCharacters = characters.filter((character) => character.id !== parsedId);
    setCharacters(filteredCharacters);
  }

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = 'unaPassword';

  function Form(props) {
    const [userData, setUserData] = useState({
      email: "",
      password: "",
    });

    function handleSubmit(event) {
      event.preventDefault();
      const { email, password } = userData;
      if (email === EMAIL && password === PASSWORD) {
        setAccess(true);
        navigate('/home');
      } else {
        window.alert('Usuario o contraseña incorrectos');
      }
    }

    function handleInputChange(event) {
      const { name, value } = event.target;
      setUserData({ ...userData, [name]: value });
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);


  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route exact path='/' element={<Form />} />
        <Route exact path='/home' element={<Cards />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/detail/:id' element={<Detail />} />
      </Routes>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;

