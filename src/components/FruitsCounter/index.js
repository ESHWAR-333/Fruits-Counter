import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  incrementMango = () => {
    this.setState(prevState => {
      console.log('mango')
      return {mango: prevState.mango + 1}
    })
  }

  incrementBanana = () => {
    this.setState(prevState => {
      console.log('banana')
      return {banana: prevState.banana + 1}
    })
  }

  render() {
    const {banana, mango} = this.state
    return (
      <div className="mainContainer">
        <div className="subContainer">
          <h1 className="heading">
            Bob ate <span className="number">{mango}</span> mangoes{' '}
            <span className="number">{banana}</span> bananas
          </h1>
          <div className="imageContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="image image1"
              alt=" mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="image image2"
              alt="banana"
            />
          </div>
          <div className="buttons">
            <button
              className="button button1"
              type="button"
              onClick={this.incrementMango}
            >
              Eat Mango
            </button>
            <button
              className="button button2"
              type="button"
              onClick={this.incrementBanana}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
