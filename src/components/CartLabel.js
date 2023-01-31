import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartLabel.css';

const CartLabel = () => {

    const [itemsInCart, setItemsCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        var shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
        setItemsCount(shoppingCart.length);
        window.dispatchEvent(new Event("storage"));
    }, [itemsInCart]);

    const viewShoppingCart = () => {
        var shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
        console.log(shoppingCart);
        navigate("/cart");
    }

    return (
        <div className="cartLabel" onClick={() => viewShoppingCart()}>
            <h4>View Cart</h4>

            <div className='itemCount'>
                {itemsInCart}
            </div>
        </div>
    )
}

export default CartLabel;