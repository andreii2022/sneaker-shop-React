import Card from "./component/Card";

function App() {
  return (
    <div className="wrapper clear">
      <div style={{display: 'none'}} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">Корзина<img className="cu-p" src="/images/btn-remove.svg" alt="Remove"/></h2>

     <div className="items">
        <div className="cartItem d-flex align-center mb-20">
         <div 
          style={{backgroundImage: "url(/images/sneacers/1.jpg)"}} 
          className='cartItemImg'></div>

      <div className="mr-20 flex">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>5999 грн</b>
          </div>
           <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove"/>
           </div>
        <div className="cartItem d-flex align-center mb-20">
         <div 
          style={{backgroundImage: "url(/images/sneacers/1.jpg)"}} 
          className='cartItemImg'></div>

      <div className="mr-20 flex">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>5999 грн</b>
          </div>
           <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove"/>
           </div>
        <div className="cartItem d-flex align-center mb-20">
         <div 
          style={{backgroundImage: "url(/images/sneacers/1.jpg)"}} 
          className='cartItemImg'></div>

      <div className="mr-20 flex">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>5999 грн</b>
          </div>
           <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove"/>
           </div>
        <div className="cartItem d-flex align-center mb-20">
         <div 
          style={{backgroundImage: "url(/images/sneacers/1.jpg)"}} 
          className='cartItemImg'></div>

      <div className="mr-20 flex">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>5999 грн</b>
          </div>
           <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove"/>
           </div>
        <div className="cartItem d-flex align-center mb-20">
         <div 
          style={{backgroundImage: "url(/images/sneacers/1.jpg)"}} 
          className='cartItemImg'></div>

      <div className="mr-20 flex">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>5999 грн</b>
          </div>
           <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove"/>
           </div>
        <div className="cartItem d-flex align-center mb-20">
         <div 
          style={{backgroundImage: "url(/images/sneacers/1.jpg)"}} 
          className='cartItemImg'></div>

      <div className="mr-20 flex">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>5999 грн</b>
          </div>
           <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove"/>
           </div>

           <div className="cartItem d-flex align-center">
           <div 
             style={{backgroundImage: "url(/images/sneacers/1.jpg)"}} 
             className='cartItemImg'></div>

          <div className="mr-20 flex">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>5999 грн</b>
          </div>
          <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove"/>
        </div> 
       </div>

      <div className="cartTotalBlock">
        <ul>
          <li>
            <span>Итого:</span>
            <div></div>
            <b>5999 грн</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>5999 грн</b>
          </li>
        </ul>
        <button className="greenButton">Оформить заказ <img src="/images/arrow.svg" alt="Arrow"/> </button>
      </div>
      </div>
    </div>
      <header className="d-flex justify-between align-center p-40">
       <div className="d-flex align-center">
       <img width={40} height={40} src="/images/logo.png" alt="#" />
        <div>
          <h3 className="text-uppercace">REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
       </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/images/bascet.svg" alt="#" />
            <span>1205 грн</span>
          </li>
          <li>
            <img width={18} height={18} src="/images/users.svg" alt="#" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1> Все кроссовки</h1>
        <div className="searh-block">
          <img src="/images/search.svg" alt="Search"/>
          <input placeholder="Search..." />
          </div>
        </div>
            <div className="d-flex">
            <div className="card">
              <div className="favorite">
                <img src="/images/heart-unliked.svg" alt="Unliked" />
              </div>
          <img width={133} height={112} src="/images/sneacers/1.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>5999 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/images/plus.svg" alt="Plus" />
          </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/images/sneacers/2.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>5999 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/images/plus.svg" alt="Plus" />
          </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/images/sneacers/3.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>5999 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/images/plus.svg" alt="Plus" />
          </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/images/sneacers/4.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>5999 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/images/plus.svg" alt="Plus" />
          </button>
          </div>
        </div>
       
            </div>
      </div>
    </div>
  );
}

export default App;





