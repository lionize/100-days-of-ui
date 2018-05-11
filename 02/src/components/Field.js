import React from 'react'

const Field = ({children, className = ''}) => (
  <div className={`px-4 py-3 flex items-center ${className}`}>{children}</div>
)

export default Field
