import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import validate from './components/validation.js';

function Form({ setAccess, access }) {
  const [initialUserData, setInitialUserData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = 'unaPassword';

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

    if (name === 'email') {
      const isValidEmail = validate(value, initialUserData.password);
      if (!isValidEmail) {
        window.alert('El correo electrónico ingresado no es válido');
      }
    }
  }

  useEffect(() => {
    if (access) {
      navigate('/home');
    }
  }, [access, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={initialUserData.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={initialUserData.password}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Login</button>
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
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;

