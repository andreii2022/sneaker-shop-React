import React from "react";
import Card from "./component/Card/Card";
import Header from "./component/Header";
import Drawer from "./component/Drawer";



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searcValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  

React.useEffect(() =>{
  fetch('https://6413417ea68505ea732e44de.mockapi.io/items')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    setItems(json);
  });
}, []);

const onAddToCard = (obj) => {
  setCartItems((prev) => [...prev, obj]);
};

const onChangeSearchInput = (event) => {
  // console.log(event.target.value);
  setSearchValue(event.target.value);
};

  return (
    <div className="wrapper clear">
       {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)}/> : null}
        <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
         <h1>{searcValue ? `Поиск по запросу: "${searcValue}"` : 'Все кроссовки'}</h1>
         <div className="searh-block">
           <img src="/images/search.svg" alt="Search"/>
           <input onChange={onChangeSearchInput} placeholder="Search..." />
          </div>
        </div>

            <div className="d-flex flex-wrap">         
              {items.map((item, index) =>(
                <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log('Добавили в закладки')}
                onPlus={(obj) => onAddToCard(obj)}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;





