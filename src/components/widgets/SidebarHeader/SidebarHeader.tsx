import React, { FunctionComponent, useContext } from 'react'
import { motion, Variants } from 'framer-motion'

import { DashboardContext } from '../../../context/DashboardContext'

const variants: Variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

const SidebarHeader: FunctionComponent = (): JSX.Element => {
  const { isSidebarOpen } = useContext(DashboardContext)

  return (
    <header
      className={
        'flex w-full px-[2.125rem] py-6 border-b border-b-gray-200 dark:border-b-gray-900'
      }
    >
      <div className={'inline-flex whitespace-nowrap items-center gap-x-6'}>
        <div className="flex justify-center items-center select-none rounded-full bg-gray-300 w-8 h-8 text-white" />

        <motion.span
          animate={isSidebarOpen ? 'open' : 'closed'}
          variants={variants}
          initial={false}
          transition={{ duration: 0.2 }}
          className={
            'text-xl text-gray-900 dark:text-white font-medium select-none'
          }
        >
          Task Manager
        </motion.span>
      </div>
    </header>
  )
}

export default SidebarHeader
