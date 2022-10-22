import React, { FunctionComponent } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import classNames from 'classnames'

import { useRelativeTime } from '../../../hooks/useRelativeTime'

interface TaskRowProps {
  name: string
  description?: string
  deadline?: string
}

type Props = TaskRowProps

const TaskRow: FunctionComponent<Props> = ({
  name,
  description,
  deadline,
}): JSX.Element => {
  const [dateOfDeadline, isOverdue] = useRelativeTime(deadline)

  return (
    <div className={'border-b border-b-slate-200 py-2.5'}>
      <div className={'flex gap-3 items-starts'}>
        <button
          className={
            'flex items-center justify-center w-5 h-5 mt-0.5 rounded-full border-2 border-red-400 text-red-400 bg-red-50'
          }
        >
          <BsCheck2
            size={14}
            className={'transition duration-300 opacity-0 hover:opacity-100'}
          />
        </button>

        <div className={'flex flex-col flex-1 gap-1'}>
          <h3 className={'text-sm text-gray-800'}>{name}</h3>

          {description && (
            <p className={'text-xs text-gray-500 line-clamp-1'}>
              {description}
            </p>
          )}

          {deadline && (
            <span
              className={classNames({
                'text-xs': true,
                'text-red-600': isOverdue,
                'text-green-600': !isOverdue,
              })}
            >
              {dateOfDeadline}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default TaskRow
