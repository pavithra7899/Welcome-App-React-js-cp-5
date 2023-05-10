// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe', count: 0}

  change = () => {
    const {count} = this.state
    if (count === 0 || count % 2 === 0) {
      this.setState(prevState => ({
        count: prevState.count + 1,
        text: 'Subscribed',
      }))
    } else {
      this.setState(prevState => ({
        count: prevState.count + 1,
        text: 'Subscribe',
      }))
    }
  }

  render() {
    const {text} = this.state
    // let btn
    // if (count % 2 === 1) {
    //   btn = (
    //     <button onClick={this.change} type="button">
    //       Subscribed
    //     </button>
    //   )
    // } else {
    //   btn = (
    //     <button onClick={this.change} type="button">
    //       Subscribe
    //     </button>
    //   )
    // }
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.change}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
