import RoomCancelReq from '@/components/Dashboard/Host/Room-cancel-page/RoomCancelReq';
import PageTitle from '@/components/Shared/Title/PageTitle';
import React from 'react';

const AllRoomCancelRequest = () => {
    return (
        <div>
          <PageTitle className='py-4'>Room Cancel Request</PageTitle>

            <RoomCancelReq/>
        </div>
    );
};

export default AllRoomCancelRequest;