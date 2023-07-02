import { Suspense, lazy } from 'react'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
const App1 = lazy(() => import('app1/App1'))

import './App.css'
import MainLayoutWrapper from './MainLayoutWrapper'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayoutWrapper>
        <div>
          <Link to='app1'>Micro Frontend application App1</Link>
        </div>
      </MainLayoutWrapper>
    )
  },
  {
    path: 'app1',
    element: (
      <MainLayoutWrapper>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <App1 />
          </Suspense>
        </div>
      </MainLayoutWrapper>
    )
  }
])

const App = () => <RouterProvider router={router} />

export default App
