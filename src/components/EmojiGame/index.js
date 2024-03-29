/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  render() {
    const {emojisList} = this.props
    return (
      <div>
        <NavBar />
        <ul className="emojis-list-container">
          {emojisList.map(eachItem => (
            <EmojiCard emojiDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default EmojiGame
