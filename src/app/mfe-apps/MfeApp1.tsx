import { Suspense, lazy } from 'react'

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
const App1 = lazy(() => import('remoteApp1/App1'))

const MfeApp1: React.FC = () => {
  return (
    <div className='Container'>
      <Suspense fallback={<div>Loading...</div>}>
        <App1 settings={'some string from MfeApp1'} />
      </Suspense>
    </div>
  )
}

export default MfeApp1
