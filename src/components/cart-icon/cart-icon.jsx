import { useSelector, useDispatch } from 'react-redux'; 

import {ShoppingCartIcon, CartIconContainer , ItemCount} from './cart-icon.styles'

import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';


const CartIcon = () => {
    const dispatch = useDispatch()

    const isCartOpen = useSelector(selectCartIsOpen);
    const cartCount = useSelector(selectCartCount)

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return ( 
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingCartIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}
export default CartIcon;