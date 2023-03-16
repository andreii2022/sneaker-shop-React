import React from "react";
import Card from "./component/Card/Card";
import Header from "./component/Header";
import Drawer from "./component/Drawer";



function App() {
  let [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  fetch('https://6413417ea68505ea732e44de.mockapi.io/items')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    setItems(json);
  });


  return (
    <div className="wrapper clear">
       {cartOpened ? <Drawer onClose={() => setCartOpened(false)}/> : null}
        <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
         <h1> Все кроссовки</h1>
         <div className="searh-block">
           <img src="/images/search.svg" alt="Search"/>
           <input placeholder="Search..." />
          </div>
        </div>

            <div className="d-flex flex-wrap">         
              {items.map((obj) =>(
                <Card
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite={() => console.log('Добавили в закладки')}
                onPlus={() => console.log('нажали на плюс') }
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;





