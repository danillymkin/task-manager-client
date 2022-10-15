import {
  BsCheckCircle,
  BsCheckCircleFill,
  BsFolder,
  BsFolderFill,
  BsGear,
  BsGearFill,
  BsGrid,
  BsGridFill,
  BsPeople,
  BsPeopleFill,
} from 'react-icons/bs'

import { SidebarMenuItemType } from '../../widgets/SidebarMenuItem/SidebarMenuItem'

export type NavigationConfig = SidebarMenuItemType[]

export const navigationConfig: NavigationConfig = [
  {
    path: '/',
    label: 'Сводка',
    Icon: BsGrid,
    ActiveIcon: BsGridFill,
  },
  {
    path: '/projects',
    label: 'Проекты',
    Icon: BsFolder,
    ActiveIcon: BsFolderFill,
  },
  {
    path: '/tasks',
    label: 'Задачи',
    Icon: BsCheckCircle,
    ActiveIcon: BsCheckCircleFill,
  },
  {
    path: '/teams',
    label: 'Команды',
    Icon: BsPeople,
    ActiveIcon: BsPeopleFill,
  },
  {
    path: '/settings',
    label: 'Настройки',
    Icon: BsGear,
    ActiveIcon: BsGearFill,
  },
]
