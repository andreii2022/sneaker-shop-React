import React from 'react';

function Drawer (props) {
    return (
        <div className="overlay">

        <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">Корзина<img onClick={props.onClose}className="cu-p" src="/images/btn-remove.svg" alt="Remove"/></h2>

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
    );
};

export default Drawer;