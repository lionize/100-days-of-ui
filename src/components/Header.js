import React from 'react'
import Logo from 'components/Logo'

const Header = () => (
  <header className="flex items-center border-b border-solid border-purple-darker pb-2">
    <Logo animate={true} size="48px" />
    <h1 className="ml-2 font-semibold text-xxl text-purple-darker">
      Registratr
    </h1>
  </header>
)

export default Header
