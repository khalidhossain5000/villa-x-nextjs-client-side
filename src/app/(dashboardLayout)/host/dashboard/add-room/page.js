import AddRoomForm from '@/components/Dashboard/Host/Add-Room/AddRoomForm';
import React from 'react';

const HostAddRoomPage = () => {
 
    return (
        <div>
            <h2 className='text-center text-2xl lg:text-4xl 2xl:text-5xl font-bold font-poppins'>Add room this is for host</h2>

            <AddRoomForm
            
            ></AddRoomForm>
        </div>
    );
};

export default HostAddRoomPage;