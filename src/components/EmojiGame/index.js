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
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    isGameEnd: false,
    topScore: 0,
  }

  onClickEmojiCard = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isPresent = clickedEmojis.includes(id)
    if (isPresent) {
      this.finishGameAndSetTopScore(clickedEmojis.length)
    } else {
      if (emojisList.length - 1 === clickedEmojis.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }
    this.setIsGameEnd(true)
  }

  restartGame = () => {
    this.setState({clickedEmojis: []})
    this.setIsGameEnd(false)
  }

  setIsGameEnd = value => {
    this.setState({isGameEnd: value})
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(eachItem => (
          <EmojiCard
            emojiDetails={eachItem}
            key={eachItem.id}
            onClickEmojiCard={this.onClickEmojiCard}
          />
        ))}
      </ul>
    )
  }

  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = emojisList.length === clickedEmojis.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.restartGame}
        score={clickedEmojis.length}
      />
    )
  }

  render() {
    const {isGameEnd, clickedEmojis, topScore} = this.state
    const currScore = clickedEmojis.length

    return (
      <div className="bg-container">
        <NavBar
          currScore={currScore}
          topScore={topScore}
          isGameEnd={isGameEnd}
        />
        <div className="emoji-body-container">
          {isGameEnd ? this.renderWinOrLose() : this.renderEmojiList()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
