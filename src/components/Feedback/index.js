import Emoji from '../Emoji/index'
import './index.css'

const Feedback = props => {
  const {resources} = props
  const {emojis, loveEmojiUrl} = resources

  return (
    <div className="bg-container">
      <div className="card-container">
        <h1 className="heading">
          How Satisfied are you with the customer support performance?
        </h1>
        <ul className="list-container">
          {emojis.map(each => (
            <Emoji details={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Feedback
