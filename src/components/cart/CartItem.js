import { useDispatch } from "react-redux"
import dataClothes from "../../data/dataClothes"
import { removeItemFromCart } from "../../redux/cartSlice"

const CartItem = ({cartItem}) => {
    const thing = dataClothes.find(item => item.id === cartItem.clothesID)
    const dispatch = useDispatch()
    console.log(cartItem)
    return(<div>
                <p>{thing.name}</p>
       <p> {cartItem.quantity} item(s)</p>
       <p>Price: ${thing.price * cartItem.quantity}</p>
       <span onClick={() => dispatch(removeItemFromCart({cartItemID: cartItem.id}))}>
       <img className="icon" alt="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/>
       </span>
    </div>)
}
export default CartItem;