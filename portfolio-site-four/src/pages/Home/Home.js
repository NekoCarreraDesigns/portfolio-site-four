import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className='wrapper'>
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
      <div className='wrapper'>
        <h1>Technologies</h1>
      </div>
      <div className='wrapper'>
        <ul>
          <li>Python</li>
          <li>ES6/ES2020</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
