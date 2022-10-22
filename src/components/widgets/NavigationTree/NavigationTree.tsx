import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import {
  BsCalendar2WeekFill,
  BsCalendarDateFill,
  BsInboxFill,
} from 'react-icons/bs'
import { useDebounce, useUpdateEffect } from 'usehooks-ts'

import Search from '../../ui/Search/Search'
import NavigationTreeFolder, {
  NavigationTreeFolderType,
} from '../NavigationTreeFolder/NavigationTreeFolder'

const items: NavigationTreeFolderType[] = [
  {
    id: 1,
    path: 'incoming',
    name: 'Входящие',
    quantity: 5,
    Icon: BsInboxFill,
    iconColor: '#60A5FA',
  },
  {
    id: 2,
    path: 'today',
    name: 'Сегодня',
    quantity: 3,
    Icon: BsCalendarDateFill,
    iconColor: '#7EB167',
  },
  {
    id: 3,
    path: 'upcoming',
    name: 'Предстоящие',
    Icon: BsCalendar2WeekFill,
    iconColor: '#6C64A8',
  },
]

const NavigationTree: FunctionComponent = (): JSX.Element => {
  const [folders, setFolders] = useState<NavigationTreeFolderType[]>(items)
  const [search, setSearch] = useState<string>('')
  const debouncedSearch = useDebounce<string>(search, 200)

  const filterFolders = (
    search: string,
    folders: NavigationTreeFolderType[],
  ) => {
    if (!search) {
      return folders
    }
    return folders.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase()),
    )
  }

  useUpdateEffect(() => {
    const filteredFolders = filterFolders(debouncedSearch, items)
    setFolders(filteredFolders)
  }, [debouncedSearch])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div
      className={
        'flex flex-col h-screen min-w-[260px] p-4 gap-8 dark:bg-black border-r border-r-gray-200 dark:border-r-zinc-800'
      }
    >
      <div className={'px-4'}>
        <Search
          placeholder={'Поиск...'}
          onChange={onSearchChange}
          value={search}
        />
      </div>

      <div>
        {folders.map((folder) => (
          <NavigationTreeFolder key={folder.id} folder={folder} />
        ))}
      </div>
    </div>
  )
}

export default NavigationTree
