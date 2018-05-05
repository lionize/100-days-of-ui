import React from 'react'
import {FiniteMachine, Switch, Match} from 'components/machine'
import GettingStarted from './GettingStarted'
import FullName from './FullName'
import Email from './Email'
import Password from './Password'
import Review from './Review'
import Summary from './Summary'

const chart = {
  id: 'registration',
  initial: 'gettingStarted',
  states: {
    gettingStarted: {
      on: {
        NEXT: 'fullName',
      },
    },
    fullName: {
      on: {
        NEXT: 'email',
        BACK: 'gettingStarted',
      },
    },
    email: {
      on: {
        NEXT: 'password',
        BACK: 'fullName',
      },
    },
    password: {
      on: {
        NEXT: 'review',
        BACK: 'email',
      },
    },
    review: {
      on: {
        NEXT: 'summary',
        BACK: 'password',
      },
    },
    summary: {},
  },
}

const defaultState = {
  name: null,
  email: null,
  password: null,
}

const reducer = (state = defaultState, action = {}) => {
  const {type, data} = action

  switch (type) {
    case 'fullName.NEXT':
      return {...state, fullName: data}
    case 'email.NEXT':
      return {...state, email: data}
    case 'password.NEXT':
      return {...state, password: data}
    default:
      return state
  }
}

const RegistrationMachine = () => (
  <FiniteMachine
    log={true}
    chart={chart}
    reducer={reducer}
    render={machine => (
      <Switch machine={machine}>
        <Match state="gettingStarted" component={GettingStarted} />
        <Match state="fullName" component={FullName} />
        <Match state="email" component={Email} />
        <Match state="password" component={Password} />
        <Match state="review" component={Review} />
        <Match state="summary" component={Summary} />
      </Switch>
    )}
  />
)

export default RegistrationMachine
