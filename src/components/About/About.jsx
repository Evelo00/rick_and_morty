import React from "react";
import "./About.css";

const About = () => {
    return <div className="about-container">
        <h1 className="about-heading">About me</h1>
        <div className="about-content">
        <div>
            <h2 className="Nombre">Hola, Soy Eyver!</h2>
            <span className="nombre-span">Estudiante en Henry</span>
        </div>
        <div className="img-about">
                <img className="img" src="Allyskin.jpg" alt="Allyskin" />
        </div>
        </div>
        <div className="about-text">
            <p>
                Soy una persona apasionada por la tecnología, me gusta aprender cosas nuevas y me gusta mucho el mundo de la programación.
                Me gusta mucho el diseño y la estética, por eso me gusta mucho el mundo de la programación web.
            </p>
        </div>

        <div className='social-icons'>
            <a href='https://www.linkedin.com/in/eyvergara/' target='blank'><i class='bx bxl-linkedin'></i></a>
            <a href='https://github.com/Evelo00' target='blank'><i class='bx bxl-github' ></i></a>
        </div>
    </div>;

}

export default About;
