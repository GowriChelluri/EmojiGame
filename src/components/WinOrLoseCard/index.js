import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  return (
    <div className="win-loose-bg-container">
      <div className="box-container">
        <div className="win-or-loose-scores-container">
          <h1 className="status">{gameStatus}</h1>
          <p className="score-heading">{scoreLabel}</p>
          <p className="win-loose-score">{score}/12</p>
          <button type="button" onClick={onClickPlayAgain} className="btn">
            Play Again
          </button>
        </div>
        <img src={imageUrl} alt="win or lose" className="win-lose-img" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
