import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  increaseMangoesEaten = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  increaseBananasEaten = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="main-bg-container">
        <div className="fruits-page-container">
          <h1 className="count-text">
            Bob ate<span className="count-number"> {mangoCount} </span> mangoes
            <span className="count-number"> {bananaCount} </span>bananas
          </h1>
          <div className="fruit-counters-conatiner">
            <div className="counter-container">
              <img
                className="images"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button
                onClick={this.increaseMangoesEaten}
                className="button"
                type="submit"
              >
                Eat Mango
              </button>
            </div>
            <div className="counter-container">
              <img
                className="images"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button
                onClick={this.increaseBananasEaten}
                className="button"
                type="submit"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
