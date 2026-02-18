import ShinyText from '@/components/lightswind/shiny-text';
import React from 'react';

const HostYourHomeInfo = ({setIsOpen}) => {
    return (
        <div onClick={() => setIsOpen(true)}>
                <ShinyText
                 
                  baseColor="#ffffff"
                  shineColor="#71f9a3"
                  weight="bold"
                  className=" hover:scale-125 border border-[#f5e509] xl:border-yellow-100 p-2 rounded-full transition duration-300 cursor-pointer text-sm xl:text-xl xl:text-nowrap"
                  pauseOnHover={true}
                >
                  Host Your Home
                </ShinyText>
              </div>
    );
};

export default HostYourHomeInfo;