import './index.css'

const Emoji = props => {
  const {details} = props
  const {id, name, imageUrl} = details

  return (
    <li className="list-item">
      <img src={imageUrl} alt={name} className="emoji-img" />
      <p className="paragraph">{name}</p>
    </li>
  )
}

export default Emoji
