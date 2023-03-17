import React from 'react';

function Drawer ({onClose, items = [] }) {
    return (
        <div className="overlay">

        <div className="drawer">
         <h2 className="d-flex justify-between mb-30 ">
         Корзина<img onClick={onClose} className="cu-p" src="/images/btn-remove.svg" alt="Remove"/>
         </h2>

     <div className="items">
      {items.map((obj) => (
          <div className="cartItem d-flex align-center mb-20">
          <div 
           style={{backgroundImage: `url(${obj.imageUrl})`}} 
           className='cartItemImg'></div>
 
       <div className="mr-20 flex">
             <p className="mb-5">{obj.title}</p>
             <b>{obj.price}</b>
           </div>
            <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove"/>
           </div>
      ))} 
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