import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return(<div>
        <img className="cartIcon" alt="icon" src="https://img.icons8.com/?size=100&id=3538&format=png&color=000000"/>
        <h3>Total: $ {totalPrice}</h3>
        {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
    </div>)
}
export default Cart;