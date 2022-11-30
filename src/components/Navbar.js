import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from '../App'

function Navbar() {
    const { statusTheme, setStatusTheme } = useContext(ThemeContext)

    const toggledSwitch = (checked) => {
        setStatusTheme(
            statusTheme === 'Light' ? 'Dark' : 'Light',
        )
    }

  return (
    <nav className={statusTheme === 'Dark' ? 'dark' : 'light'}>
        <span>Mode [{statusTheme}]</span>
        <div className='boxnav'>
            <Switch 
                onChange= {toggledSwitch}
                checked = {statusTheme === 'Dark'}
                uncheckedIcon = {false}
                checkedIcon = {false}
                onColor = {'#ffa500'}
                offColor = {'#0091ff'}
            />
        </div>
    </nav>
  )
}

export default Navbar