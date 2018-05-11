import React from 'react'

const Input = ({
  className = '',
  onChange,
  onSelect,
  onBlur,
  name,
  value,
  placeholder,
  width,
  maxLength,
  type = 'text',
  style = {},
}) => (
  <input
    style={{
      minWidth: '0',
      ...style,
      ...(width && {width}),
    }}
    className={`bg-transparent text-purple-lightest text-shadow-md ${className}`}
    onChange={onChange}
    onSelect={onSelect}
    onBlur={onBlur}
    maxLength={maxLength}
    name={name}
    type={type}
    value={value}
    placeholder={placeholder}
  />
)

export default Input
