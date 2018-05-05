import React from 'react'
import UserIcon from 'components/icons/User'
import EmailIcon from 'components/icons/Email'

const Review = ({data, transition}) => (
  <div>
    <header className="mb-8 pb-4 border-b border-solid border-purple-dark">
      <h1 className="text-xl font-semibold text-purple-darkest">Review</h1>
    </header>
    <div>
      <div className="mb-8 max-w-sm">
        <p className="text-body mb-4">
          Take a moment to review the details you entered before we create your
          account.
        </p>
        <div className="text-body mb-4 pl-3">
          <div className="review-icon">
            <UserIcon className="review-icon" />
            {data.fullName}
          </div>
          <div className="review-icon">
            <EmailIcon className="review-icon" />
            {data.email}
          </div>
        </div>
        <p className="text-body">
          If everything looks good,{' '}
          <span className="text-purple font-medium">smash</span> that submit
          button and we'll get you an account.
        </p>
      </div>
      <button
        onClick={() => transition('NEXT')}
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

export default Review
