import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import {
  SiPython,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiReact,
  SiAngular,
  SiFlask,
  SiFigma,
  SiMysql,
  SiGithub,
} from "react-icons/si";

const Home = () => {
  return (
    <>
      <Header />
      <div className='image-wrapper'>
        <div className='welcome-card'>
          <img
            src='https://images.unsplash.com/photo-1483168527879-c66136b56105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoZXMlMjBvZiUyMGhhd2FpaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='aloha'></img>
          <img
            src='https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='coding'></img>
          <img
            src='https://images.unsplash.com/photo-1606833694770-40a04762ac16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHB1cHBpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
            alt='puppies'></img>
        </div>
      </div>
      <div className='wrapper-header'>
        <h1>Technologies</h1>
      </div>
      <div className='wrapper'>
        <p>
          <SiPython /> Python
        </p>
        <p>
          <SiJavascript /> ES6/ES2020
        </p>
        <p>
          <SiTypescript /> TypeScript
        </p>
        <p>
          <SiNodedotjs /> Node.js
        </p>
        <p>
          <SiMongodb /> MongoDB
        </p>
        <p>
          <SiExpress /> Express.js
        </p>
        <p>
          <SiReact /> React
        </p>
        <p>
          <SiAngular /> Angular
        </p>
        <p>
          <SiFlask /> Flask
        </p>
        <p>
          <SiFigma /> Figma
        </p>
        <p>
          <SiMysql /> MySql
        </p>
        <p>
          <SiGithub /> Github
        </p>
      </div>
    </>
  );
};

export default Home;
