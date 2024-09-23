import { Suspense, lazy } from 'react'
import { useNavigate } from 'react-router-dom'

import { routeNames } from 'app/routes/config'

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
const App1 = lazy(() => import('remoteApp1/App1'))

const MfeApp1: React.FC = () => {
  const navigate = useNavigate()
  const idTag = '_mfe-app1'

  return (
    <div className='Container'>
      <Suspense fallback={<div>Loading...</div>}>
        <div id={idTag}>
          <App1
            settings={{
              idTag,
              basename: routeNames.mfeApp1,
              parentHomeRoute: '/',
              parentNavigate: navigate
            }}
          />
        </div>
      </Suspense>
    </div>
  )
}

export default MfeApp1
