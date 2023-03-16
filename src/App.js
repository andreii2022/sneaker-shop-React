import React from "react";
import Card from "./component/Card/Card";
import Header from "./component/Header";
import Drawer from "./component/Drawer";

const arr = [
  {title:'Мужские Кроссовки Nike Blazer Mid Suede',
   price: 5999,
   imageUrl: '/images/sneacers/1.jpg'
  },
  {title:'Мужские Кроссовки Nike Air Max 270',
   price: 4999,
   imageUrl: '/images/sneacers/2.jpg'
  },
  {title:'Мужские Кроссовки Nike Blazer Mid Suede',
   price: 3999,
   imageUrl: '/images/sneacers/3.jpg'
  },
  {title:'Мужские Кроссовки Under Armour Curry 8',
   price: 3499,
   imageUrl: '/images/sneacers/4.jpg'
  },
  
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
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

            <div className="d-flex">         
              {arr.map((obj) =>(
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





