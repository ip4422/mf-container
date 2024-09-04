import { Link } from 'react-router-dom'

import { routeNames } from 'app/routes/config'

const Header: React.FC = () => {
  return (
    <header className='bg-white shadow py-4'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <div className='flex items-center space-x-4'>
          <h1 className='text-2xl font-bold'>
            Micro Frontend application container
          </h1>
        </div>
        <div className='space-x-4'>
          <Link to={routeNames.mfeApp1}>mfeApp1</Link>
          <Link to={routeNames.about}>About</Link>
          <Link to={routeNames.contact}>Contact</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
