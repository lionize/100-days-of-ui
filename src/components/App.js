import React, {Component} from 'react'
import Header from 'components/Header'

class App extends Component {
  render() {
    return (
      <div className="container w-screen h-screen p-4 m-auto">
        <Header />
        <main className="w-full my-8 ">
          <div className="p-3 w-full bg-white rounded border-blue-dark border-t-4 border-solid shadow-lg" />
        </main>
      </div>
    )
  }
}

export default App
