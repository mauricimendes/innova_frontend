import { ThemeProvider  } from './hooks/theme'
import Home from './pages/home'
import GlobalStyles from './styles/global'

function App() {

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
