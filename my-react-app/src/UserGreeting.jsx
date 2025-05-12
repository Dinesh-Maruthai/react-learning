import PropTypes from "prop-types"

function UserGreeting({ isLoggedIn = false, userName = "Guest" }) {
  const welcomeMessage = <p>Welcome {userName}</p>;
  const loginPrompt = <p>Please login to continue</p>;

  return isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    userName : PropTypes.string.isRequired,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest"
}

export default UserGreeting