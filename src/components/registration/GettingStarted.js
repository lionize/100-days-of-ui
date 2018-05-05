import React from 'react'

const GettingStarted = ({transition}) => (
  <div>
    <header className="mb-8 pb-4 border-b border-solid border-purple-dark">
      <h1 className="text-xl font-semibold text-purple-darkest mb-1">
        Welcome to Registratr
      </h1>
      <h2 className="text-base font-light text-purple-darker">
        The premier site for pointless registration
      </h2>
    </header>
    <div>
      <div className="mb-8 max-w-sm">
        <p className="text-body">
          In order to create an account, we'll need to grab a few details from
          you first. Click the button below to get started.
        </p>
      </div>
      <button
        onClick={() => transition('NEXT')}
        className="w-full py-3 rounded shadow-md hover:bg-purple bg-purple-light lowercase tracking-wide text-base font-light text-white">
        Get Started
      </button>
    </div>
  </div>
)

export default GettingStarted
