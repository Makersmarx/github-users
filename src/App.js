import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';
import './App.css';

const git = 'https://api.github.com/users/makersmarx';

const App = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitAxios();
  }, []);

  // Use Fetch for data
  // const getGitUser = async () => {
  //   const response = await fetch(git);
  //   const jsonData = await response.json();
  //   setUserData(jsonData);
  // };

  // Use axios for data
  const getGitAxios = async () => {
    const response = await axios.get(git);
    setUserData(response.data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>GitHub Recap</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">
          <h3>Username: </h3>
          {userData.name}
        </h5>
        <h5 className="info-item">
          <h3>Location: </h3>
          {userData.location}
        </h5>
        <h5 className="info-item">
          <h3>Public Repos: </h3>
          {userData.public_repos}
        </h5>
        <h5 className="info-item">
          <h3>Public Gists: </h3>
          {userData.public_gists}
        </h5>
      </div>
      <div className="scroll-left">
        <p>
          This is my GitHub Recap <strong>90's</strong> style, and Just a Silly
          Way to Play with Random CSS & React!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
