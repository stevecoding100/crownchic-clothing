import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// import { CartContext } from "../../context/cart.context";

import Button from "../button/Button";
import CartItem from "../cart-items/CartItem";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
    CartdropdownContainer,
    EmptyMessage,
    CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    };
    return (
        <CartdropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>

            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartdropdownContainer>
    );
};

export default CartDropdown;
