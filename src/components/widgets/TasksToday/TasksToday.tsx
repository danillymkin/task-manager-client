import React, { FunctionComponent } from 'react'
import dayjs from 'dayjs'

import OverdueTasks from '../OverdueTasks/OverdueTasks'
import TaskRow from '../TaskRow/TaskRow'
import TasksHeader from '../TasksHeader/TasksHeader'
import TasksSection from '../TasksSection/TasksSection'

const TasksToday: FunctionComponent = (): JSX.Element => {
  const date = dayjs().locale('ru').format('dd D MMM')

  return (
    <div
      className={
        'flex-1 flex flex-col bg-slate-50 dark:bg-neutral-900 max-h-screen'
      }
    >
      <TasksHeader title={'Сегодня'} date={date} />

      <div className={'overflow-y-auto'}>
        <div className={'flex flex-col items-center gap-5 p-10'}>
          <OverdueTasks>
            <TaskRow
              name={'Сходить в магазин'}
              description={'Закупиться продуктами на следующую неделю'}
              deadline={'2022-10-24T12:46:07Z'}
            />

            <TaskRow name={'Сделать лабу'} deadline={'2022-10-21T12:46:07Z'} />

            <TaskRow
              name={'Написать backend'}
              deadline={'2022-10-21T12:46:07Z'}
            />
          </OverdueTasks>

          <TasksSection name={'Сегодня'}>
            <TaskRow
              name={'Сходить в офис'}
              description={'Прибраться в офисе и забрать новые ключи'}
            />

            <TaskRow name={'Забрать посылку'} />
          </TasksSection>
        </div>
      </div>
    </div>
  )
}

export default TasksToday
