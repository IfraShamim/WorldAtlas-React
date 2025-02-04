import React from 'react'
import { useRouteError,NavLink } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error);
  
  return (
    <div>
      Oops! An error occured..
      {error && <p>{error.data}</p> }
      <NavLink to='/'>Go back to home</NavLink>
    </div>
  )
}

export default ErrorPage