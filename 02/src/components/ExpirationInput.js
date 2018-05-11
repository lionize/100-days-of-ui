import React from 'react'
import Input from './Input'

const format = value => {
  const v = value.replace(/[^0-9]/gi, '')
  const matches = v.match(/\d{2,4}/g)
  const match = (matches && matches[0]) || ''
  const parts = []

  for (let i = 0, length = match.length; i < length; i += 2) {
    parts.push(match.slice(i, i + 2))
  }

  return parts.length ? parts.join(' / ') : value
}

class ExpirationInput extends React.Component {
  onChange = ({target: {name, value}}) => {
    const {onChange} = this.props

    onChange({
      target: {
        name,
        value: format(value),
      },
    })
  }

  render() {
    const {onChange, ...rest} = this.props

    return <Input {...rest} onChange={this.onChange} />
  }
}

export default ExpirationInput
