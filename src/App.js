
import './App.css';
import Clothes from './components/ClothesComponents/Clothes';
import Cart from './components/cart/Cart';
import AllCategories from './components/filter/AllCaregories';

function App() {
  return (
    <div className="App">
      <div className='mainContainer'>
      <AllCategories/>
      <Clothes />
      </div>
      <div className=' cart'>
      <Cart />
      </div>
    </div>
  );
}

export default App;
