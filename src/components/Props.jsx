import PropTypes from "prop-types";

export const Props = ({ title, subtitle = "El mejor curso", number }) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>The sum is {number + 5}</p>
        </>
    )
}

Props.PropTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    number: PropTypes.number
}

Props.defaultProps = {
    title: "Curso react",
    subtitle: "El mejor curso",
}

