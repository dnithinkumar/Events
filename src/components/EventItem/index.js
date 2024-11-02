// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onChangeActiveEvent} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  const onClickEventItem = () => {
    onChangeActiveEvent(id, registrationStatus)
  }

  return (
    <li className="event-item-container">
      <button
        onClick={onClickEventItem}
        type="button"
        className="event-item-btn"
      >
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
