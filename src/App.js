import React from "react";
import axios from "axios";
import {Route, Routes} from 'react-router-dom';
import Header from "./component/Header";
import Drawer from "./component/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searcValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  

React.useEffect(() => {
  async function fetchData() {
    const cartResponse = await axios.get('https://6413417ea68505ea732e44de.mockapi.io/cart');
    const favoritesResponse = await axios.get('https://6413417ea68505ea732e44de.mockapi.io/cart');
    const itemsResponse = await axios.get('https://6413417ea68505ea732e44de.mockapi.io/items');

    setCartItems(cartResponse.data);
    setFavorites(favoritesResponse.data);
    setItems(itemsResponse.data);
}
fetchData();

}, []);

const onAddToCard = (obj) => {
  if(cartItems.find((item) => Number(item.id) === Number( obj.id))) {
    axios.delete(`https://6413417ea68505ea732e44de.mockapi.io/cart/${obj.id}`);
    setCartItems((prev) => prev.filter((item) => Number( item.id) !== Number( obj.id)));
  } else {
    axios.post('https://6413417ea68505ea732e44de.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  }
};


const onRemoveItem = (id) => {
  axios.delete(`https://6413417ea68505ea732e44de.mockapi.io/cart/${id}`);
  setCartItems((prev) => prev.filter((item) => item.id !== id));

};

const onAddToFavorite = async (obj) => {
 try{
  if(favorites.find(favobj => favobj.id === obj.id)){
    axios.delete(`https://6413417ea68505ea732e44de.mockapi.io/cart/${obj.id}`);
    setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
  } else {
    const {data} = await axios.post('https://6413417ea68505ea732e44de.mockapi.io/cart/', obj);
    setFavorites((prev) => [...prev, data]);   
  }
 } catch (error) {
   alert('Не удалось добавить в фавориты');
 }
  
};




const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value);
};

  return (
    <div className="wrapper clear">
       {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      
        
        <Routes>
         <Route path="/" exact element={<Home
          items={items}
          cartItems={cartItems}
          setSearchValue={setSearchValue}
          searcValue={searcValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCard={onAddToCard}
         />}/>

          <Route path="/favorites" exact element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>}/>

        </Routes>
        

    </div>
  );
}

export default App;





