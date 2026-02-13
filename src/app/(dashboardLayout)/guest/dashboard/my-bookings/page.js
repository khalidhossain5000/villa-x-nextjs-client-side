import MyBookings from '@/components/Dashboard/Guest/MyBookings/MyBookings';
import PageTitle from '@/components/Shared/Title/PageTitle';
import React from 'react';

const GuestMyAllBookings = () => {
    return (
        <div>
                   <PageTitle className={`py-6`}>My Bookings</PageTitle>


            <MyBookings/>
        </div>
    );
};

export default GuestMyAllBookings;