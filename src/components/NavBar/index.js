import './index.css'

const NavBar = props => {
  const {currScore, topScore, isGameEnd} = props
  if (isGameEnd) {
    return null
  }
  return (
    <div className="nav-bg-container">
      <div className="logo-name-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      <nav className="scores-container">
        <p className="score">Score: {currScore}</p>
        <p className="score">Top Score: {topScore}</p>
      </nav>
    </div>
  )
}
export default NavBar
