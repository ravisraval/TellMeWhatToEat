import React from 'react';

const NotFound = (props) => {

  setTimeout(alert("you messed up. just fyi"), 50000);
  return (
    <div className="container text-center">
      <h1>404</h1>
      <p>There is no spoon. Or a page here.</p>
    </div>
  );
};

export default NotFound;
