import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            brand: string,
            container: string,
            background: string,
            primary: string,
            secondary: string,
            green: string,
            orange: string,
            red: string
        }
    }
}