import React from "react"
import { Moon, Sun } from 'phosphor-react'

import { useTheme } from '../../hooks/theme'
import { NavbarContainer } from "./styles"
import logo from '../../assets/logo.svg'

const Navbar: React.FC = () => {
    const { actualTheme, changeTheme } = useTheme()

    return (
        <NavbarContainer>
            <div>
                <img src={logo} height='24' />
                <strong>MyTasks</strong>
            </div>
            <strong>Seja bem-vindo</strong>
            <button onClick={changeTheme}>
                {actualTheme === 'light' ? <Moon /> : <Sun />}
            </button>
        </NavbarContainer>
    )
}

export default Navbar