import { createRoutesFromElements, Route } from 'react-router-dom'

import RootLayout from './ui/RootLayout'
import { routeNames } from './config'

const appRoutes = createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route
      path={routeNames.home}
      lazy={async () => {
        const module = await import('pages/home')
        return {
          Component: module.default
        }
      }}
    />
    <Route
      path={`${routeNames.mfeApp1}/*`}
      lazy={async () => {
        const module = await import('pages/mfeapp1')
        return {
          Component: module.default
        }
      }}
    />
    <Route
      path={routeNames.about}
      lazy={async () => {
        const module = await import('pages/about')
        return {
          Component: module.default
        }
      }}
    />
    <Route
      path={routeNames.contact}
      lazy={async () => {
        const module = await import('pages/contact')
        return {
          Component: module.default
        }
      }}
    />
  </Route>
)

export default appRoutes
