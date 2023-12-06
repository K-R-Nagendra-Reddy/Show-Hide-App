// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isPresent1: false, isPresent2: false}

  firstName = () => {
    this.setState(prevState => ({isPresent1: !prevState.isPresent1}))
  }

  secondName = () => {
    this.setState(prevState => ({isPresent2: !prevState.isPresent2}))
  }

  render() {
    const {isPresent1, isPresent2} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="card" id="card1">
            <button type="button" className="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {isPresent1 && <p className="new-button">Joe</p>}
          </div>
          <div className="card" id="card2">
            <button type="button" className="button" onClick={this.secondName}>
              Show/Hide Lastname
            </button>
            {isPresent2 && <p className="new-button">Jonas</p>}
            {}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
