import React from 'react'

const Password = ({data, transition}) => (
  <div>
    <header className="mb-8 pb-4 border-b border-solid border-purple-dark">
      <h1 className="text-xl font-semibold text-purple-darkest">Password</h1>
    </header>
    <div>
      <div className="mb-4 max-w-sm">
        <p className="text-body">
          Create a secure password. Something like{' '}
          <a target="_blank" href="https://xkcd.com/936/">
            common-horse-battery-staple
          </a>.
        </p>
      </div>
      <input
        type="password"
        name="password"
        autoFocus
        defaultValue={data.password}
        ref={input => (this.input = input)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault()
            transition('NEXT', this.input.value)
          }
        }}
        className="w-64 px-2 py-3 mb-8 border-solid border-b-2 text-purple-darker border-purple-lighter focus:border-purple bg-purple-lightest focus:bg-purple-lighter"
      />
      <button
        onClick={() => transition('NEXT', this.input.value)}
        className="w-full py-3 rounded shadow-md hover:bg-purple bg-purple-light lowercase tracking-wide text-base font-light text-white mb-2">
        submit
      </button>
      <button
        onClick={() => transition('BACK')}
        className="py-3 lowercase tracking-wide text-base font-light text-purple-lighter hover:text-purple-dark">
        ← back
      </button>
    </div>
  </div>
)

export default Password
