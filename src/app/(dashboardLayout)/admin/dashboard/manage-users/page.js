import ManageUsers from '@/components/Dashboard/admin/ManageUsers/ManageUsers';
import React from 'react';

const ManageUsersPage = () => {
    return (
        <div>
            <h2 className='text-xl font-bold py-12 text-center text-fuchsia-600'>Manage Users Page</h2>


            <ManageUsers/>
        </div>
    );
};

export default ManageUsersPage;