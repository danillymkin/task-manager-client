import React, { FunctionComponent } from 'react'

interface TasksSectionProps {
  name: string
  actions?: React.ReactNode
  children?: React.ReactNode
}

type Props = TasksSectionProps

const TasksSection: FunctionComponent<Props> = ({
  name,
  actions,
  children,
}): JSX.Element => {
  return (
    <section className={'flex flex-col overflow-hidden w-full'}>
      <div
        className={
          'flex justify-between border-b border-b-slate-200 dark:border-b-zinc-800 py-2.5'
        }
      >
        <h2 className={'text-sm font-semibold dark:text-white'}>{name}</h2>

        {actions}
      </div>

      {children}
    </section>
  )
}

export default TasksSection
