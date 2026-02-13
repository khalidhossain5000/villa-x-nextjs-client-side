import React from 'react';

const PageSubTitle = ({children,className}) => {
    return (
        <h1 className={`${className} text-xl lg:text-2xl 2xl:text-3xl font-playfair font-bold text-text-primary text-center `}>{children}</h1>
    );
};

export default PageSubTitle;