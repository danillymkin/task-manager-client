import React, { FunctionComponent, useContext } from 'react'
import { IconType } from 'react-icons'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { Variants } from 'framer-motion'

import { DashboardContext } from '../../../context/DashboardContext'

export type SidebarMenuItemType = {
  path: string
  label: string
  Icon: IconType
  ActiveIcon: IconType
}

interface SidebarMenuItemProps {
  item: SidebarMenuItemType
}

type Props = SidebarMenuItemProps

const variants: Variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

const SidebarMenuItem: FunctionComponent<Props> = ({ item }): JSX.Element => {
  const { label, path, Icon, ActiveIcon } = item

  const { isSidebarOpen } = useContext(DashboardContext)

  const iconClasses = 'min-h-[22px] min-w-[22px]'

  const baseItemClasses =
    'relative inline-flex w-full whitespace-nowrap items-center gap-x-6 pl-7 pr-3.5 py-4 rounded-[0.75rem] select-none'
  const notActiveItemClasses =
    'text-gray-700 dark:text-gray-600 font-medium border border-white dark:border-black transition hover:border-gray-200 dark:hover:border-gray-900'
  const activeLineClasses =
    'before:absolute before:w-[5px] before:h-full before:bg-blue-400 before:left-[-10px] before:rounded-r-full before:transition before:opacity-0'
  const activeOpenItem =
    'text-blue-400 bg-blue-50 font-bold dark:text-white dark:bg-slate-900'
  const activeClosedItem =
    'text-blue-400 font-bold dark:text-white before:opacity-100'

  return (
    <NavLink to={path} end={path === '/'}>
      {({ isActive }) => (
        <div
          className={classNames({
            [baseItemClasses]: true,
            [notActiveItemClasses]: !isActive,
            [activeOpenItem]: isActive && isSidebarOpen,
            [activeLineClasses]: true,
            [activeClosedItem]: isActive && !isSidebarOpen,
          })}
        >
          {isActive ? (
            <ActiveIcon size={22} className={iconClasses} />
          ) : (
            <Icon size={22} className={iconClasses} />
          )}

          <motion.span
            animate={isSidebarOpen ? 'open' : 'closed'}
            variants={variants}
            initial={false}
            transition={{ duration: 0.2 }}
            className={'text-sm'}
          >
            {label}
          </motion.span>
        </div>
      )}
    </NavLink>
  )
}

export default SidebarMenuItem
