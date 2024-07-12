import dataClothes from "../../data/dataClothes";
import ClothesCard from "./ClothesCard";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/clothesSlice";


const Clothes = () => {

    const selectedCategory = useSelector(getSelectedCategory);
    return(<div>
        {dataClothes
        .filter(thing =>{
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === thing.category;
        })
        .map (thing => <ClothesCard thing={thing} />)}
    </div>)
}
export default Clothes;