import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../cart/ChangeQuantity";



const ClothesCard = ({thing}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    return(<div>
        <img className="imgClothes" src={`./${thing.img}.jpg`} alt="clothes"/>
        <h3>{thing.name}</h3>
        <p>$ {thing.price}</p>
        <ChangeQuantity quantity={quantity}  setQuantity={setQuantity}/>
        <button onClick={() => {dispatch(addItemToCart({thing,quantity}));
        }}>Add to cart</button>
    </div>)
}
export default ClothesCard;