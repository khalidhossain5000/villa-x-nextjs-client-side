import MyBookings from '@/components/Dashboard/Guest/MyBookings/MyBookings';
import React from 'react';

const GuestMyAllBookings = () => {
    return (
        <div>
            <h2 className='text-2xl text-center py-12 text-pink-600 font-bold animate-bounce'>This is my bookings for Guest users</h2>


            <MyBookings/>
        </div>
    );
};

export default GuestMyAllBookings;