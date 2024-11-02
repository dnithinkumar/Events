// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const defaultView = () => (
    <div className="view-container">
      <p className="default-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-img"
      />
      <p className="view-description-text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with beautiful
        art form.
      </p>
      <button className="register-btn" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="view-heading-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const registrationClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-img"
      />
      <h1 className="view-heading-text">Registrations Are Closed Now!</h1>
      <p className="view-description-text">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (status) {
    case 'YET_TO_REGISTER':
      return renderYetToRegisterView()
    case 'REGISTERED':
      return renderRegisteredView()
    case 'REGISTRATIONS_CLOSED':
      return registrationClosedView()
    default:
      return defaultView()
  }
}

export default ActiveEventRegistrationDetails
