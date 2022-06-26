import React from 'react'
import {Outlet} from 'react-router-dom'

export const LayoutHome = () => {
  return (
    <div>
        <p>Layout Home</p>
        <Outlet />
    </div>
  )
}
