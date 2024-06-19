import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import {
    CartdropdownContainer,
    EmptyMessage,
    CartItems,
} from "./cart-dropdown.styles";

import Button from "../button/Button";
import CartItem from "../cart-items/CartItem";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
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
