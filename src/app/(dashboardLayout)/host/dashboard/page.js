import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import React from 'react';

const HostDashboardHomePage  = () => {
    return (
         <PrivateRoute requiredRoles={['host']}>
        <div>
            <h2>Welcome to host dashboard page ove r here</h2>
        </div>
        </PrivateRoute>
    );
};

export default HostDashboardHomePage    ;