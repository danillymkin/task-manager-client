import React, { FunctionComponent, useContext } from 'react'
import classNames from 'classnames'
import { motion, Variants } from 'framer-motion'

import { DashboardContext } from '../../../context/DashboardContext'
import { NavigationConfig } from '../../layouts/DashboardLayout/navigationConfig'
import SidebarCollapse from '../SidebarCollapse/SidebarCollapse'
import SidebarHeader from '../SidebarHeader/SidebarHeader'
import SidebarMenu from '../SidebarMenu/SidebarMenu'

interface SidebarProps {
  navigationConfig: NavigationConfig
}

type Props = SidebarProps

const variants: Variants = {
  open: { width: 300 },
  closed: { width: 100 },
}

const Sidebar: FunctionComponent<Props> = ({
  navigationConfig,
}): JSX.Element => {
  const { isSidebarOpen } = useContext(DashboardContext)

  const sidebarClasses = classNames({
    'flex flex-col overflow-hidden justify-between items-start pt-7 pb-6 border-r border-r-gray-200 dark:border-r-zinc-800 h-screen bg-white dark:bg-black':
      true,
  })

  return (
    <motion.aside
      animate={isSidebarOpen ? 'open' : 'closed'}
      initial={false}
      variants={variants}
      className={sidebarClasses}
    >
      <div className={'w-full'}>
        <SidebarHeader />

        <SidebarMenu items={navigationConfig} />
      </div>

      <div className={'pl-6'}>
        <SidebarCollapse />
      </div>
    </motion.aside>
  )
}

export default Sidebar
