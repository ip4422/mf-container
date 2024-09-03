import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import appRoutes from 'app/routes/AppRoutes'
import './App.css'

const router = createBrowserRouter(appRoutes)

const App: React.FC = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<div>something went wrong</div>}
    />
  )
}

export default App
