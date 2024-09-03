import { Outlet } from 'react-router-dom'

import Footer from 'app/root/ui/Footer'
import Header from 'app/root/ui/Header'

const RootLayout: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 text-gray-900'>
      <Header />
      <main className='container mx-auto p-4'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
