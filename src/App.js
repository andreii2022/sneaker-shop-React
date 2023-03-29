import React from "react";
import {Route, Routes} from 'react-router-dom';
import axios from "axios";
import Header from "./component/Header";
import Drawer from "./component/Card/Drawer/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searcValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  

React.useEffect(() => {
  async function fetchData() {
  try {
    const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
      axios.get('https://6413417ea68505ea732e44de.mockapi.io/cart'),
      axios.get('https://6413417ea68505ea732e44de.mockapi.io/cart'),
      axios.get('https://6413417ea68505ea732e44de.mockapi.io/items'),
    ]);
   

    setIsLoading(false);
    setCartItems(cartResponse.data);
    setFavorites(favoritesResponse.data);
    setItems(itemsResponse.data);
  } catch (error) {
    alert('Ошибка при запросе данных ;(');
  }
}
fetchData();

}, []);

const onAddToCard = async (obj) => {
 try {
  if(cartItems.find((item) => Number(item.id) === Number( obj.id))) {
    setCartItems((prev) => prev.filter((item) => Number( item.id) !== Number( obj.id)));
    await axios.delete(`https://6413417ea68505ea732e44de.mockapi.io/cart/${obj.id}`);
  } else {
    setCartItems((prev) => [...prev, obj]);
    await axios.post('https://6413417ea68505ea732e44de.mockapi.io/cart', obj);
  }
 } catch (error) {
  alert('Ошибка при добавлении  в карзину');
 }
};


const onRemoveItem = (id) => {
  try {
    axios.delete(`https://6413417ea68505ea732e44de.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  } catch (error) {
    alert(' Ошибка при удалении из карзины')
  
  }
};

const onAddToFavorite = async (obj) => {
 try{
  if(favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
    axios.delete(`https://6413417ea68505ea732e44de.mockapi.io/cart/${obj.id}`);
    setFavorites((prev) => prev.filter((item) =>Number(item.id ) !== Number(obj.id)));
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

const isItemAdded = (id) => {
  return cartItems.some((obj) => Number(obj.id) === Number(id));
};

  return (
    <AppContext.Provider
     value={{
       items, 
       cartItems, 
       favorites, 
       isItemAdded, 
       onAddToFavorite,
       onAddToCard, 
       setCartOpened,
       setCartItems 
       }}>
    <div className="wrapper clear">
       
         <Drawer 
          items={cartItems} 
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
          />
      
         <Header onClickCart={() => setCartOpened(true)} />
      
        
        <Routes>
         <Route path="/" exact element={<Home
          items={items}
          cartItems={cartItems}
          searcValue={searcValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCard={onAddToCard}
          isLoading={isLoading}
         />}/>

          <Route path="/favorites" exact element={<Favorites/>}/>
          <Route path="/orders" exact element={<Orders/>}/>

        </Routes>
        
    </div>
    </AppContext.Provider>
  );
}

export default App;





