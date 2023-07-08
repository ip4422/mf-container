import { Suspense, lazy } from 'react'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'

import './App.css'
import MainLayoutWrapper from './MainLayoutWrapper'

const MFApp1 = lazy(() => import('./components/MFApp1'))

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
            <MFApp1 />
          </Suspense>
        </div>
      </MainLayoutWrapper>
    )
  }
])

const App = () => <RouterProvider router={router} />

export default App
