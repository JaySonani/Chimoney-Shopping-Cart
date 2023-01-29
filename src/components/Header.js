import CartLabel from './CartLabel';
import './Header.css';

const Header = () => {
    return(
        <div className='header'>
            <h3>Chimoney Amazon Shopping Cart</h3>
            <CartLabel/>
        </div>
    );
}

export default Header;