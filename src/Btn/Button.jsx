import PropTypes from "prop-types"

export const Button = ({text, message}) => {
    return <button>{text}, {message}</button>
}

Button.propTypes = {
    text: PropTypes.string,
    mesasge: PropTypes.string
}