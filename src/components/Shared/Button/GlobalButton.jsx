import React from 'react';

const GlobalButton = ({ className,type,onClick,children}) => {
    return (
      <button onClick={onClick} type={type} className={`${className}  cursor-pointer transition duration-300  `}>{children}</button>
    );
};

export default GlobalButton;