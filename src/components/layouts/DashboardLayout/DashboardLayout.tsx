import React, { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../../widgets/Sidebar'

import { navigationConfig } from './navigationConfig'

const DashboardLayout: FunctionComponent = (): JSX.Element => {
  return (
    <div className={'flex h-screen w-full overflow-hidden'}>
      <Sidebar navigationConfig={navigationConfig} />

      <main className={'h-screen flex-1'}>
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
