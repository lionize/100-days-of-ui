import React from 'react'
import Input from './Input'

const format = value => {
  const v = value.replace(/[^0-9]/gi, '')
  const matches = v.match(/\d{4,16}/g)
  const match = (matches && matches[0]) || ''
  const parts = []

  for (let i = 0, length = match.length; i < length; i += 4) {
    parts.push(match.slice(i, i + 4))
  }

  return parts.length ? parts.join(' ') : v
}

class CardInput extends React.Component {
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

export default CardInput
