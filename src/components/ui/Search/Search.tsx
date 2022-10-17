import React, { FunctionComponent, HTMLAttributes } from 'react'
import { BsSearch } from 'react-icons/bs'
import classNames from 'classnames'

interface SearchProps extends HTMLAttributes<HTMLInputElement> {
  value: string
}

type Props = SearchProps

const Search: FunctionComponent<Props> = ({ value, ...props }): JSX.Element => {
  return (
    <div className={'relative'}>
      <BsSearch
        size={16}
        className={'absolute left-1 top-1/2 -translate-y-1/2 text-gray-400'}
      />

      <input
        type="text"
        className={classNames({
          'w-full outline-0 text-sm pl-7 py-1.5': true,
        })}
        value={value}
        {...props}
      />
    </div>
  )
}

export default Search
