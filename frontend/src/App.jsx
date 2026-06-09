import { SignInButton } from '@clerk/clerk-react'
import React from 'react'

const App = () => {
  return (
    <div>App
      <SignInButton mode='modal' />
    </div>
  )
}

export default App