import HomeTitle from '@/components/Shared/HomePage/HomeTitle/HomeTitle';
import React from 'react';
import hiking from '../../../assets/Home/Info/Main-custom-icon-1.png'
import climbing from '../../../assets/Home/Info/Main-custom-icon-2.png'
import walking from '../../../assets/Home/Info/Main-custom-icon-3.png'
import cycling from '../../../assets/Home/Info/Main-custom-icon-4.png'
import canoeing from '../../../assets/Home/Info/Main-custom-icon-5.png'
import orienteering from '../../../assets/Home/Info/Main-custom-icon-6.png'
const Info = () => {
    const activities = [
  {
    title: "Hiking",
    icon:hiking,
    subtitle: "Explore rugged trails and embrace nature's calm winds"
  },
  {
    title: "Climbing",
    icon:climbing,
    subtitle: "Scale rocky heights and conquer thrilling vertical challenges"
  },
  {
    title: "Walking",
    icon:walking,
    subtitle: "Stroll scenic paths and enjoy peaceful outdoor moments"
  },
  {
    title: "Cycling",
    icon:cycling,
    subtitle: "Ride winding routes and feel the rush of adventure"
  },
  {
    title: "Canoeing",
    icon:canoeing,
    subtitle: "Paddle quiet rivers and explore serene watersides"
  },
  {
    title: "Orienteering",
    icon:orienteering,
    subtitle: "Navigate wild terrain using maps and sharp instincts"
  }
];

    return (
        <div>
            <HomeTitle
            title=""
            />

<div>
    {
        activities.map((act,i)=><div
        key={i}
        >
            
        </div>)
    }
</div>


        </div>
    );
};

export default Info;