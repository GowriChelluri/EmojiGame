import './index.css'

const EmojiGame = props => {
  const {emojiDetails} = props
  const {emojiUrl, emojiName} = emojiDetails
  return (
    <li className="emoji-card">
      <img src={emojiUrl} alt={emojiName} />
    </li>
  )
}
export default EmojiGame
