import StatsCard from '@/components/Dashboard/Host/Stats/StatsCard';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import React from 'react';

const HostDashboardHomePage  = () => {
    return (
         <PrivateRoute requiredRoles={['host']}>
        <div>
           

            <StatsCard/>
        </div>
        </PrivateRoute>
    );
};

export default HostDashboardHomePage    ;