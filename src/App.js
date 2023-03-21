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
  const [searcValue, setSearchValue] = React.useState('');
  const [favorites, setFavorites] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  

React.useEffect(() =>{
axios.get('https://6413417ea68505ea732e44de.mockapi.io/items').then((res) => {
  setItems(res.data);
});
axios.get('https://6413417ea68505ea732e44de.mockapi.io/cart').then((res) =>{
  setCartItems(res.data);
});

axios.get('https://6413417ea68505ea732e44de.mockapi.io/cart').then((res) =>{
  setFavorites(res.data);
});
}, []);

const onAddToCard = (obj) => {
  axios.post('https://6413417ea68505ea732e44de.mockapi.io/cart', obj);
  setCartItems((prev) => [...prev, obj]);
};


const onRemoveItem = (id) => {
  axios.delete(`https://6413417ea68505ea732e44de.mockapi.io/cart/${id}`);
  setCartItems((prev) => prev.filter((item) => item.id !== id));

};

const onAddToFavorite = (obj) => {
  axios.post('https://6413417ea68505ea732e44de.mockapi.io/cart/', obj);
  setFavorites((prev) => [...prev, obj]);
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
          setSearchValue={setSearchValue}
          searcValue={searcValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCard={onAddToCard}
         />}/>

          <Route path="/favorites" exact element={<Favorites
          items={favorites}/>}/>

        </Routes>
    </div>
  );
}

export default App;





