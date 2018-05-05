import React, {Component} from 'react'
import Registration from 'components/registration'
import Header from 'components/Header'

class App extends Component {
  render() {
    return (
      <div className="max-w-lg w-screen h-screen p-4 m-auto">
        <Header />
        <main className="w-full max-w-md m-auto my-8 ">
          <div className="px-8 py-8 w-full bg-white rounded border-purple-light border-t-4 border-solid shadow-lg">
            <Registration />
          </div>
        </main>
      </div>
    )
  }
}

export default App
