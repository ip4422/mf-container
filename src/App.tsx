import { Suspense, lazy } from 'react'

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
const App1 = lazy(() => import('app1/App1'))

import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Micro Frontend application container.</p>
      </header>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <App1 settings={'some string'} />
        </Suspense>
      </div>
    </div>
  )
}

export default App
