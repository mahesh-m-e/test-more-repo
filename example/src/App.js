import React from 'react'

import { ExampleComponent, CopyButton } from 'one-test-module'
import 'one-test-module/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <CopyButton text={'Some Button'} type="primary"/>
    </div>
  )
}

export default App
