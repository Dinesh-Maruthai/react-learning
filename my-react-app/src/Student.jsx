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

Student.defaultProps = {
    name: "guest",
    age: 0,
    isStudent: true,
}

export default Student