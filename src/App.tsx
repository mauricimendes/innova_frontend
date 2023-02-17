import { ThemeProvider  } from './hooks/theme'
import Routes from './routes'

import GlobalStyles from './styles/global'

function App() {

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App
