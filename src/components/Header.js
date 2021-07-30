import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ name, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{name}'s Tasks</h1>
            <Button text={!showAdd ? 'Add' : 'Close'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    name: 'Anonymous'
}
Header.prototype = {
    name: PropTypes.string,
}

export default Header