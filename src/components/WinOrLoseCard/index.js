import './index.css'

const WON_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LOSE_IMG_URL =
  'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imgUrl = isWon ? WON_IMG_URL : LOSE_IMG_URL
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLable = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-container">
      <div className="score-details-container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="your-score-status">{scoreLable}</p>
        <p className="your-score">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section-container">
        <img src={imgUrl} alt="win or lose" className="win-lose-image" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
