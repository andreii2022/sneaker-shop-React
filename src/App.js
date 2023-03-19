import React from "react";
import axios from "axios";
import Card from "./component/Card/Card";
import Header from "./component/Header";
import Drawer from "./component/Drawer";



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
  axios.post('https://6413417ea68505ea732e44de.mockapi.io/favorites', obj);
  setFavorites((prev) => [...prev, obj]);
};




const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value);
};

  return (
    <div className="wrapper clear">
       {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/> : null}
        <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
         <h1>{searcValue ? `Поиск по запросу: "${searcValue}"` : 'Все кроссовки'}</h1>
         <div className="searh-block">
           <img src="/images/search.svg" alt="Search"/>
           {searcValue && (
           <img
            onClick={() => setSearchValue('')} 
            className=" clear cu-p" 
            src="/images/btn-remove.svg" 
            alt="Clear"/>)}
           
           <input onChange={onChangeSearchInput} value={searcValue} placeholder="Search..." />
          </div>
        </div>

            <div className="d-flex flex-wrap">         
              {items
              .filter((item) => item.title.toLowerCase().includes(searcValue.toLowerCase()) )
              .map((item, index) =>(
                <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={onAddToFavorite}
                onPlus={(obj) => onAddToCard(obj)}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;





