import React from "react";
import Card from "../component/Card/Card";
// import AppContext from "../context";


function Home({
    items,
    // cartItems,
    searcValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCard,
    isLoading
   }) {  

    // const { isItemAdded } = React.useContext(AppContext);

    const renderItems = () =>{
      const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searcValue.toLowerCase())
      );
      return (isLoading ? [...Array(10)] : filtredItems).map((item, index) =>(
        <Card
          key={index}
          onFavorite={(obj) => onAddToFavorite(obj)}
          onPlus={(obj) => onAddToCard(obj)}
          loading={isLoading}
          {...item}
        />
      ));
    };

    return (
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
        {renderItems()}
        </div>
  </div>

    );
}

export default Home;
