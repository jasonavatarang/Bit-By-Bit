import React from 'react';

const Home = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1 className="display-4">Welcome to Bit by Bit</h1>
        <p className="lead">Your journey to mastering coding starts here.</p>
        <a href="#about" className="btn btn-primary btn-lg">Learn More</a>
      </div>
    </div>
  );
};

export default Home;
