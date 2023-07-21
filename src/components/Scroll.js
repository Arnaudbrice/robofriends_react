import React from 'react';

const Scroll = ({children}) => {

  return (
    <div className="scrollContainer  mt3   ba b--dotted bw1 " style={{ overflow: 'scroll', maxHeight:"1000px",position:"relative"}}>
      {children}
    </div>
  );

};
export default Scroll;


