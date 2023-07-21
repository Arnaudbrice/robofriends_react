import React from 'react';
// destructuring of the props and use it a parameter

const Card = ({ email, id, name, username }) => {

  return (
    <div className=" card tc bg-light-green br3  grow bw2 shadow-5 ">
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <div>
        <h2>{name}</h2>
        <p className="gray">{email}</p>
      </div>
    </div>
  );
};

export default Card;




