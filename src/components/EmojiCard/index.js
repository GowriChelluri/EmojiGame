import './index.css'

const EmojiGame = props => {
  const {emojiDetails, onClickEmojiCard} = props
  const {emojiUrl, emojiName, id} = emojiDetails
  const onClickEmoji = () => {
    onClickEmojiCard(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" onClick={onClickEmoji} className="emoji-btn">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiGame
