import React, { useCallback, useState, useContext, createContext } from 'react'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import { ThemeProvider as Theme } from 'styled-components'

type Props = {
    children: React.ReactNode
}

interface ThemeContextData {
    changeTheme(): void,
    actualTheme: string
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState(dark)

    const changeTheme = useCallback(() => {
        theme.title === 'light' ? setTheme(dark) : setTheme(light)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ changeTheme, actualTheme: theme.title }} >
            <Theme theme={theme}>
                { children }
            </Theme>
        </ThemeContext.Provider>
    )
}

function useTheme(): ThemeContextData {
    const context = useContext(ThemeContext)
    if ( !context ) throw new Error('theme must be used within an ThemProvider')
    return context
}

export { useTheme, ThemeProvider }