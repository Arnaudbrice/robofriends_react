import React from 'react';

const Footer = ({year}) => {
  return (
    <>
       <footer>
      <p>copyright@ <span>{year}</span> by Arnaud Habenicht</p>
    </footer>

    </>
  );
}

export default Footer;
