import MyListing from '@/components/Dashboard/Host/MyListing/MyListing';
import PageTitle from '@/components/Shared/Title/PageTitle';
import React from 'react';

const MyListingByHost = () => {
    return (
        <div>
            <PageTitle className="pt-3">Add Room</PageTitle>

            <MyListing/>
        </div>
    );
};

export default MyListingByHost;