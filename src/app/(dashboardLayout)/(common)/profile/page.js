import Profile from '@/components/Dashboard/Common/Profile/Profile';
import PageTitle from '@/components/Shared/Title/PageTitle';
import React from 'react';

const HostProfile = () => {
    return (
        <div>
            <PageTitle className={`py-6`}>My Profile </PageTitle>


            <Profile/>
        </div>
    );
};

export default HostProfile;