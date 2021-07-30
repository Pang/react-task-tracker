import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ name, onAdd, showAdd }) => {
    const location = useLocation();

    const getterObj = {
        get isHomepage() {
            return location.pathname === '/';
        }
    }

    return (
        <header className='header mx-auto'>
            <h1>{name}'s Tasks</h1>
            {getterObj.isHomepage && (
                <Button
                    text={!showAdd ? 'Add' : 'Close'} 
                    onClick={onAdd}
                />)}
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