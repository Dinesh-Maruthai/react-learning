import PropTypes from "prop-types";

function Student (props) {
    return (
        <div className="container">
            <p className="name">Name: {props.name}</p>
            <p className="age">Age: {props.age}</p>
            <p className="isStudent">Student: {props.isStudent ? "yes" : "no"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "guest",
    age: 0,
    isStudent: true,
}

export default Student