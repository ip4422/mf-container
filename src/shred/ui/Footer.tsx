const Footer = () => {
  return (
    <footer className='bg-gray-100 py-4 mt-auto'>
      <div className='container mx-auto flex justify-center items-center text-center text-sm text-gray-600 space-x-4'>
        <div>&copy; {new Date().getFullYear()} Igor Popov</div>
      </div>
    </footer>
  )
}

export default Footer
