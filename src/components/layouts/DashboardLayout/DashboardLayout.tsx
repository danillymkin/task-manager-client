import React, { FunctionComponent } from 'react'

import { DashboardProvider } from '../../../context/DashboardContext'
import Sidebar from '../../widgets/Sidebar/Sidebar'

import { navigationConfig } from './navigationConfig'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

type Props = DashboardLayoutProps

const DashboardLayout: FunctionComponent<Props> = ({
  children,
}): JSX.Element => {
  return (
    <DashboardProvider>
      <div className={'flex h-screen w-full'}>
        <Sidebar navigationConfig={navigationConfig} />

        <main className={'h-screen flex-1'}>{children}</main>
      </div>
    </DashboardProvider>
  )
}

export default DashboardLayout
