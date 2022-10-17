import React, { FunctionComponent } from 'react'
import { IconType } from 'react-icons'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

export type NavigationTreeFolderType = {
  id: number
  path: string
  name: string
  quantity?: number
  Icon: IconType
  iconColor: string
}

interface NavigationTreeFolderProps {
  folder: NavigationTreeFolderType
}

type Props = NavigationTreeFolderProps

const NavigationTreeFolder: FunctionComponent<Props> = ({
  folder,
}): JSX.Element => {
  const { path, name, quantity, Icon, iconColor } = folder

  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <div
          className={classNames({
            'flex items-center justify-between px-4 py-2.5 text-sm rounded-md':
              true,
            'bg-teal-50 dark:bg-slate-900': isActive,
          })}
        >
          <div className={'flex items-center gap-3.5'}>
            <Icon color={iconColor} />

            <span
              className={classNames({
                'text-gray-300 dark:text-gray-400': !isActive,
                'text-gray-700 font-semibold dark:text-white': isActive,
              })}
            >
              {name}
            </span>
          </div>

          {quantity && (
            <div
              className={
                'flex justify-center items-center w-5 h-5 rounded-full bg-red-500'
              }
            >
              <span className={'text-white text-xs'}>{quantity}</span>
            </div>
          )}
        </div>
      )}
    </NavLink>
  )
}

export default NavigationTreeFolder
