// Write your code here
import {Component} from 'react'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {login: false}

  onClick = () => {
    this.setState(prevState => ({login: !prevState.login}))
  }

  render() {
    const {login} = this.state
    return (
      <div className="loginApp-bg-container">
        <div className="loginApp-container">
          <Message login={login} />
          {login ? (
            <Logout logout={this.onClick} />
          ) : (
            <Login login={this.onClick} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
