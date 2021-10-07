import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
    return (
        <button 
            style={{backgroundColor: color}} 
            className='btn btn-primary ml-4'
            onClick={onClick}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button