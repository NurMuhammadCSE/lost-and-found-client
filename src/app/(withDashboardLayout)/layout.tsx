import DashboardDrawer from '@/components/dashboard/dashboardDrawer/dashboardDrawer';
import React from 'react';

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <DashboardDrawer>
      {children}
    </DashboardDrawer>
  );
};

export default layout;