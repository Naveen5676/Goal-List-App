import React from 'react';

import './Button.css';

const Button = props => {
  const btnchange = props.btnchange;
  

  return (
    <button type={props.type} className={`button ${!btnchange ? 'error':''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
