import React from 'react';

const PageTitle = ({children,className}) => {
    return (
        <h1 className={`${className} text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-raleway font-bold text-text-primary text-center `}>{children}</h1>
    );
};

export default PageTitle;