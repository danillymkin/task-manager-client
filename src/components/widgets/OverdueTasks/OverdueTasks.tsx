import React, { FunctionComponent } from 'react'

import TasksSection from '../TasksSection/TasksSection'

interface OverdueTasksProps {
  children?: React.ReactNode
}

type Props = OverdueTasksProps

const OverdueTasks: FunctionComponent<Props> = ({ children }): JSX.Element => {
  const actions = (
    <span className={'text-sm text-red-600 cursor-pointer dark:text-red-500'}>
      Перенести
    </span>
  )

  return (
    <TasksSection name={'Просрочено'} actions={actions}>
      {children}
    </TasksSection>
  )
}

export default OverdueTasks
