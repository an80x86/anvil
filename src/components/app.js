import React from 'react'
import Header from './header'
import Main from './main'
import Login from './login'

class App extends React.Component {

  menu() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
  render() {
    let islogin = false;
    return (
      islogin ?  this.menu() : <Login />
    )
  }
}

export default App
