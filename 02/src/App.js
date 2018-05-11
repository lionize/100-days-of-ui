import React, {Component} from 'react'
import CardForm from './components/CardForm'

class App extends Component {
  render() {
    return (
      <div className="flex w-screen h-screen items-center justify-center bg-purple-dark bg-glamorous">
        <CardForm />
      </div>
    )
  }
}

export default App
