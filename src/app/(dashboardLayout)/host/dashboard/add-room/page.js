import AddRoomForm from '@/components/Dashboard/Host/Add-Room/AddRoomForm';
import PageTitle from '@/components/Shared/Title/PageTitle';
import React from 'react';

const HostAddRoomPage = () => {
 
    return (
        <div className=''>
            <PageTitle className='pt-3'>Add Room</PageTitle>
<div className='shadow-xl max-w-6xl mx-auto rounded-xl bg-background dark:bg-background'>
<AddRoomForm
            
            ></AddRoomForm>
</div>
            
        </div>
    );
};

export default HostAddRoomPage;