import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className='wrapper'>
        <h1 className='projects-header'>Fun Games</h1>
        {/* <iframe
          title='snake-game'
          src='https://drive.google.com/file/d/1spgG5H_1atO80wIprotTQWSqWJf5YAYt/preview'
          width='640'
          height='480'></iframe> */}
        <img src='Snake_Game.gif' alt='snake-game'></img>
        <a href='/main.exe'>Play me!</a>
      </div>
    </>
  );
};

export default Projects;
