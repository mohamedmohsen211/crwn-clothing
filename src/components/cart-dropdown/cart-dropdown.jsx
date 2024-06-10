import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { selectCartItems } from '../../store/cart/cart.selector';

import Button from '../button/button'
import CartItem from '../cart-item/cart-item';

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles'


const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    
    const navigate = useNavigate();

    const goToCheckOutHndler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems >
                {cartItems.length ? (cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)) :
                    (<EmptyMessage >Your cart is empty</EmptyMessage>)}
            </CartItems>
            <Button onClick={goToCheckOutHndler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;