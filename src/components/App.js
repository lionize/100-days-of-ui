import React, {Component} from 'react'
import Registration from 'components/registration'
import Header from 'components/Header'

class App extends Component {
  render() {
    return (
      <div className="container w-screen h-screen p-4 m-auto">
        <Header />
        <main className="w-full my-8 ">
          <div className="p-4 w-full bg-white rounded border-purple-light border-t-4 border-solid shadow-lg">
            <Registration />
          </div>
        </main>
      </div>
    )
  }
}

export default App
