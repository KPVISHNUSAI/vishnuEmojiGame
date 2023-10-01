import './index.css'

const Navbar = props => {
  const {currentScore, topScore, isGameInProgress} = props
  return (
    <nav className="nav-container">
      <div className="navbar-sub-container">
        <div className="logo-title-container">
          <img
            alt="emoji logo"
            className="emoji-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
