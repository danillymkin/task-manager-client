import React, { FunctionComponent } from 'react'

import { NavigationConfig } from '../../layouts/DashboardLayout/navigationConfig'
import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem'

interface SidebarMenuProps {
  items: NavigationConfig
}

type Props = SidebarMenuProps

const SidebarMenu: FunctionComponent<Props> = ({ items }): JSX.Element => {
  return (
    <nav className={'flex flex-col gap-y-2.5 px-2.5 pt-3.5'}>
      {items.map((item) => (
        <SidebarMenuItem key={item.path} item={item} />
      ))}
    </nav>
  )
}

export default SidebarMenu
