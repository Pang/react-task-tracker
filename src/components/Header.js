import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ name }) => {
    const onClick = () => {
        console.log('clickFromHeader');
    }

    return (
        <header className='header'>
            <h1>{name}'s Tasks</h1>
            <Button text='Add' onClick={onClick}/>
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