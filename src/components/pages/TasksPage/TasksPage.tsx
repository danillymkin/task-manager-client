import React, { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'

import NavigationTree from '../../widgets/NavigationTree/NavigationTree'

const TasksPage: FunctionComponent = (): JSX.Element => {
  return (
    <div className={'flex'}>
      <NavigationTree />

      <Outlet />
    </div>
  )
}

export default TasksPage
