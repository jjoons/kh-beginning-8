import { createGlobalStyle } from 'styled-components'
import './App.css'
import { Provider } from './Context'
import Create from './components/Create'
import Header from './components/Header'
import List from './components/List'
import Template from './components/Template'

function App() {
  const GlobalStyle = createGlobalStyle`
    body {
      background-color: cadetblue;
    }
  `

  return (
    <Provider>
      <GlobalStyle />
      <Template>
        <Create />
        <Header />
        <List />
      </Template>
    </Provider>
  )
}

export default App
