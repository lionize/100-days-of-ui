import React from 'react'
import UserIcon from './UserIcon'
import CreditCardIcon from './CreditCardIcon'
import Modal from './Modal'
import Field from './Field'
import Input from './Input'
import CardInput from './CardInput'
import ExpirationInput from './ExpirationInput'

const isCompleted = values =>
  values.name &&
  values.name.length &&
  values.number &&
  values.number.length === 19 &&
  values.expiration &&
  values.expiration.length === 7 &&
  values.cvc &&
  values.cvc.length >= 3 &&
  values.zip &&
  values.zip.length === 5

class CardForm extends React.Component {
  state = {
    selected: {},
    filled: {},
    values: {},
    showModal: false,
  }

  handleChange = ({target: {name, value}}) =>
    this.setState(({values, filled}) => ({
      values: {
        ...values,
        [name]: value,
      },
      filled: {
        ...filled,
        [name]: !!value.length,
      },
    }))

  handleSelect = ({target: {name}}) =>
    this.setState(({selected}) => ({
      selected: {
        ...selected,
        [name]: true,
      },
    }))

  handleBlur = ({target: {name}}) =>
    this.setState(({selected}) => ({
      selected: {
        ...selected,
        [name]: false,
      },
    }))

  toggleModal = () =>
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }))

  render() {
    const {filled, selected, values, showModal} = this.state
    const completed = isCompleted(values)

    return showModal ? (
      <Modal close={this.toggleModal} />
    ) : (
      <div className="card-form w-full max-w-104 text-purple-lightest">
        <h1 className="mb-2 font-extrabold text-xl text-shadow-lg tracking-wide">
          Payment Details
        </h1>
        <div className="rounded shadow-lg bg-purple border-purple-light border-t mb-8">
          <Field className="border-b border-purple-light justify-between">
            <div className="mr-4">
              <UserIcon
                className={`${filled.name ? 'filled' : ''} ${
                  selected.name ? 'selected' : ''
                }`}
              />
            </div>
            <Input
              onChange={this.handleChange}
              onSelect={this.handleSelect}
              onBlur={this.handleBlur}
              name="name"
              value={values.name || ''}
              className="w-full"
              placeholder="Cardholder name"
            />
          </Field>
          <Field>
            <div className="mr-4">
              <CreditCardIcon
                className={`${filled.number ? 'filled' : ''} ${
                  selected.number ? 'selected' : ''
                }`}
              />
            </div>
            <div className="flex w-full">
              <CardInput
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                onBlur={this.handleBlur}
                name="number"
                maxLength="19"
                style={{flex: '2 0 150px'}}
                value={values.number || ''}
                placeholder="Card number"
              />
              <ExpirationInput
                onChange={this.handleChange}
                name="expiration"
                value={values.expiration || ''}
                placeholder="MM/YY"
                maxLength="7"
                style={{flex: '1 1 50px'}}
              />
              <Input
                onChange={this.handleChange}
                name="cvc"
                value={values.cvc || ''}
                placeholder="CVC"
                maxLength="4"
                style={{flex: '1 1 50px'}}
              />
              <Input
                onChange={this.handleChange}
                name="zip"
                value={values.zip || ''}
                placeholder="ZIP"
                maxLength="5"
                style={{flex: '1 1 50px'}}
              />
            </div>
          </Field>
        </div>
        <div>
          <button
            className="btn btn-submit"
            onClick={this.toggleModal}
            disabled={!completed}>
            Submit Payment
          </button>
        </div>
      </div>
    )
  }
}

export default CardForm
