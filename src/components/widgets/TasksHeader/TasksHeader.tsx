import React, { FunctionComponent } from 'react'

interface TasksHeaderProps {
  title: string
  date?: string
}

type Props = TasksHeaderProps

const TasksHeader: FunctionComponent<Props> = ({
  title,
  date,
}): JSX.Element => {
  return (
    <header
      className={
        'w-full bg-white dark:bg-neutral-900 p-10 border-b border-b-gray-200 dark:border-b-zinc-800'
      }
    >
      <div className={'flex items-baseline gap-2'}>
        <h1 className={'text-xl font-semibold dark:text-white'}>{title}</h1>

        <time className={'text-xs text-gray-500 dark:text-gray-400'}>
          {date}
        </time>
      </div>
    </header>
  )
}

export default TasksHeader
