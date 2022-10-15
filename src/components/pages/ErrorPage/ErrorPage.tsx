import React, { FunctionComponent } from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage: FunctionComponent = (): JSX.Element => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Ошибка</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    )
  }

  return (
    <div>
      <h1>Ошибка</h1>
    </div>
  )
}

export default ErrorPage
