import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import validate from './components/Validation/validation.js';
import Favorites from './components/Favorites/Favorites';
import './components/Form/Form.css';

function Form({ setAccess, access }) {
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [initialUserData, setInitialUserData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = 'Password1';

  function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = initialUserData;
    if (email === EMAIL && password === PASSWORD) {
      setAccess(true);
      navigate('/home');
    } else {
      window.alert('Usuario o contraseña incorrectos');
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;  

    
    setInitialUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
    setErrors(validate({...initialUserData, [name]: value }))
  }

  useEffect(() => {
    if (access) {
      navigate('/home');
    }
  }, [access, navigate]);

  return (
    <form className='form-style' onSubmit={handleSubmit}>
      <img className='form-img' src='https://d2lzb5v10mb0lj.cloudfront.net/covers/600/30/3007790.jpg' alt='imagen-login'></img>
      <input className='form-input'
        type="email"
        name="email"
        placeholder="Email"
        
        onChange={handleInputChange}
        required
      />
      <p>{errors.email}</p>
      <input className='form-input'
        type="password"
        name="password"
        placeholder="Password"
        
        onChange={handleInputChange}
        required
      />
      <p>{errors.password}</p>
      <button className='form-button' type="submit">Login</button>
    </form>
  );
}

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No se encontró el personaje');
        }
      })
      .catch((error) => console.log(error));
  }

  function onClose(id) {
    const parsedId = parseInt(id);
    const filteredCharacters = characters.filter(
      (character) => character.id !== parsedId
    );
    setCharacters(filteredCharacters);
  }

  return (
    <div className="App">
      {access && <Nav onSearch={onSearch} access={access} />}
      <Routes>
        <Route exact path="/" element={<Form setAccess={setAccess} />} />
        {access && (
          <>
            <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;

