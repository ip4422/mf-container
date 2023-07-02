import React from 'react'

export interface MainLayoutWrapperProps {
  children?: React.ReactNode
}

export const MainLayoutWrapper: React.FC<MainLayoutWrapperProps> = ({
  children
}) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Micro Frontend application container.</h1>
      </header>
      {children}
    </div>
  )
}

export default MainLayoutWrapper
