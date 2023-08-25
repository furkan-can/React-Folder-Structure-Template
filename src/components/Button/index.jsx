import PropTypes from "prop-types";

const index = ({ onClick,text }) => {
  return (
    <button onClick={onClick} className="bg-blue-600 text-white font-semibold">
      {text}
    </button>
  )
}

index.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
}

export default index
