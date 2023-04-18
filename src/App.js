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
    setErrors(validate({ ...initialUserData, [name]: value }))
  }

  useEffect(() => {
    if (access) {
      navigate('/home');
    }
  }, [access, navigate]);

  return (
    <div className='form-container'>

      <div className='content'>
        <h2 className='logo'><i class='bx bxs-cat' >
        </i>  
        </h2>
        <div className='content-text'>
          <h2>Welcome!<br></br><span>
            Rick & Morty API</span></h2>
          <p className='text'>En esta pagina, podras acceder a la wiki de esta gran serie, espero sea de tu agrado.</p>
        </div>
        <div className='social-icons'>
          <a href='https://www.linkedin.com/in/eyvergara/' target='blank'><i class='bx bxl-linkedin'></i></a>
          <a href='https://github.com/Evelo00' target='blank'><i class='bx bxl-github' ></i></a>
        </div>
      </div>
      <div className='logreg-box'>
        <form className='form-box' onSubmit={handleSubmit}>
          <h2 className='title'>Sign in</h2>
          <div className='form-input'>
            <span className='icon-form'><i class='bx bxs-envelope'></i></span>
            <input className='inputForm'
              type="email"
              name="email"
              // placeholder="Email"
              onChange={handleInputChange}
              required
            />
            <label className='label-input'>Email</label>
          </div>
          <div className='form-input'>
            <span className='icon-form'><i class='bx bx-lock-alt' ></i></span>
            <input className='inputForm'
              type="password"
              name="password"
              // placeholder="Password"
              onChange={handleInputChange}
              required
              />
              <label className='label-input'>Password</label>
          </div>
              <p>{errors.email}</p>
            <p>{errors.password}</p>
          <button className='form-button' type="submit">Login</button>
        </form>

      </div>
    </div >
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

