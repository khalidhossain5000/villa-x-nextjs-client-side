import React from 'react';

const HomeTitle = ({title,subtitle,className}) => {
    return (
         <h2 className={`font-raleway text-2xl md:text-3xl xl:text-5xl font-bold text-text-primary ${className}`}>
         {title} <span className="font-playfair">{subtitle}</span>
        </h2>
    );
};

export default HomeTitle;