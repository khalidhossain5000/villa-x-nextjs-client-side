import SingleRoomLayout from '@/components/AllRoomsPage/SingleRoomPage/SingleRoomLayout';
import React, { use } from 'react';

const RoomSinglePage = ({params}) => {
    const roomId=use(params)
    return (
        <div>
            <SingleRoomLayout
            roomId={roomId}></SingleRoomLayout>
        </div>
    );
};

export default RoomSinglePage;