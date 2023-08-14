import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className='header-container'>
        <div className='header-container'>
          <h1 className='projects-header'>Sites</h1>
          <div className='project-container'>
            <div className='project-div'>
              <h2 className='site-header'>eFormative</h2>
              <img src='eFormative.gif' alt='website'></img>
              <p>
                Website made with the MERN stack. MongoDB database to store user
                information, and store objects that the user is selling. Express
                routes to make the site CRUD capable, React frontend for the UI,
                and Node to make it serverless. The site uses material UI for a
                nice clean presentation
              </p>
              <a href='https://eformative.com'>Visit</a>
            </div>
            <div className='project-div'>
              <h2 className='site-header'>The Antique Geek</h2>
              <img src='The Antique Geek.gif' alt='website'></img>
              <p>
                Static website made using React, and react-router-dom
                navigation. The site uses ES6 and some CSS for styling the page.
              </p>
              <a href='https://eformative.com'>Visit</a>
            </div>
          </div>
        </div>
        <h1 className='projects-header'>Fun Games</h1>
        <div className='project-container'>
          <div className='project-div'>
            <h2 className='game-header'>Snake</h2>
            {/* <iframe
              title='snake-game'
              src='https://drive.google.com/file/d/1spgG5H_1atO80wIprotTQWSqWJf5YAYt/preview'
              width='640'
              height='480'></iframe> */}
            <img src='Snake_Game_1.gif' alt='snake-game'></img>

            <p>
              Snake Game made using Python, the game uses object oriented
              programming to draw the board, as well as using functional
              programming for the controls
              <button className='play-me-button'>
                <a href='/main.exe'>Play me!</a>
              </button>
            </p>
          </div>
          <div className='project-div'>
            <h2 className='game-header'>Connect Four</h2>
            {/* <iframe
              title='Connect-four'
              src='https://drive.google.com/file/d/1tCl2AWszlp2nD5c4dBYqfU91tL24Nz_1/preview'
              width='640'
              height='480'></iframe> */}
            <img src='Connect_Four_1.gif' alt='connect-four'></img>
            <p>
              Game was made using Python, Pygame, and Numpy. Uses functional
              programming to draw, and provide the games functionality
              <button>
                <a href='/connect_four.exe'>Play me!</a>
              </button>
            </p>
          </div>
          <div className='project-div'>
            <h2 className='game-header'>Tetris</h2>
            <img src='Tetris_1.gif' alt='tetris'></img>
            <p>
              This game was made using Python and Pygame. It uses Object
              oriented programming to draw the board and game pieces and
              functional programming for the controls
            </p>
            <button>
              <a href='/tetris.exe'>Play me!</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
