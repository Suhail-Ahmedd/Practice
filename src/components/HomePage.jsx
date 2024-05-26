import React from 'react'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <div>Default Page</div>
      <Outlet />
    </>
  )
}

export default HomePage