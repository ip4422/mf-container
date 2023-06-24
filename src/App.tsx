// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import App1 from 'app1/App1'

import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Microfrontend application container.</p>
      </header>
      <div>
        <App1 />
      </div>
    </div>
  )
}

export default App
