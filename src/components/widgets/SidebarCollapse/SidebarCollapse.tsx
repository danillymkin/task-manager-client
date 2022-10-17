import React, { FunctionComponent, useContext } from 'react'
import { BsChevronRight } from 'react-icons/bs'
import classNames from 'classnames'

import { DashboardContext } from '../../../context/DashboardContext'

const SidebarCollapse: FunctionComponent = (): JSX.Element => {
  const { isSidebarOpen, toggleSidebar } = useContext(DashboardContext)

  const iconClasses = classNames({
    transition: true,
    'rotate-0': !isSidebarOpen,
    'rotate-180': isSidebarOpen,
  })

  return (
    <div
      className={
        'p-4 cursor-pointer border rounded-[0.75rem] text-gray-900 dark:text-gray-400 border-white dark:border-black transition hover:border-gray-200 dark:hover:border-gray-900'
      }
      onClick={toggleSidebar}
    >
      <BsChevronRight size={16} className={iconClasses} />
    </div>
  )
}

export default SidebarCollapse
