import { SignedOut, SignIn, SignInButton, UserProfile } from '@clerk/clerk-react'
import React from 'react'

const App = () => {
  return (
    <div>App
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut>

    </div>
  )
}

export default App