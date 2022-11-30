import React, { useContext, useState } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from '../App'

function Navbar() {
    const { statusTheme, setStatusTheme } = useContext(ThemeContext)
  return (
    <nav>
        <span>Mode [{statusTheme}]</span>
        <div>
            <Switch />
        </div>
    </nav>
  )
}

export default Navbar