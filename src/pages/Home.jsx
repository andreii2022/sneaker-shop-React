import Card from "../component/Card/Card";


function Home({
    items,
    searcValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCard }) 
{
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

    );
}

export default Home;
