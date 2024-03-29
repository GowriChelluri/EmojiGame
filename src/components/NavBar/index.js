import './index.css'

const NavBar = () => (
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
      <h1 className="score">Score:</h1>
      <h1 className="score">Top Score:</h1>
    </nav>
  </div>
)
export default NavBar
