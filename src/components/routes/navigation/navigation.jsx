import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../../store/user/user-selector";

import CartIcon from "../../cart-icon/cart-icon";
import CartDropdown from "../../cart-dropdown/cart-dropdown";

import { selectCartIsOpen } from "../../../store/cart/cart.selector";


import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.style'
import { signOutStart } from "../../../store/user/user.action";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectCartIsOpen);
    const disatch = useDispatch()

    const signOutUser = () => disatch(signOutStart());
    return ( 
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo"/>
                </LogoContainer>
                <NavLinks >
                    <NavLink to='/Shop'>
                        SHOP
                    </NavLink>
                    {currentUser ?
                        (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) :
                        (<NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                        )}
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
                <Outlet/>
        </Fragment>
    );
}
export default Navigation;