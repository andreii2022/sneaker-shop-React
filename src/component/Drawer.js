import React from 'react';

function Drawer ({onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">

        <div className="drawer">
         <h2 className="d-flex justify-between mb-30 ">
         Корзина<img onClick={onClose} className="cu-p" src="/images/btn-remove.svg" alt="Remove"/>
         </h2>

         {
          items.length > 0 ?  <div className="items">
          {items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
              <div 
               style={{backgroundImage: `url(${obj.imageUrl})`}} 
               className='cartItemImg'></div>
     
           <div className="mr-20 flex">
                 <p className="mb-5">{obj.title}</p>
                 <b>{obj.price}</b>
               </div>
                <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/images/btn-remove.svg" alt="Remove"/>
               </div>
          ))} 
       </div> : (<div className='cartEmpty d-flex align-center justify-center flex-colum flex'>
          <img className='mb-20' width={120} height={120} src="/images/empty-cart.jpg" alt=""/>
          <h2>Корзина пустая</h2>
          <p className='opacity-6'>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <button className='greenButton'>
            <img src="/images/arrow.svg" alt="Arrow"/>
            Вернуться назад
          </button>

        </div>
        )}
         

        

    

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