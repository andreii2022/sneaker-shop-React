import React from 'react';
import axios from 'axios';
import Info from '../../info';
import cardStyles from './Drawer.module.scss';
import { useCart } from '../../../hooks/useCart';

// import AppContext from '../context';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer ({onClose, onRemove, items = [], opened }) {
  const {cartItems, setCartItems, totalPrice} = useCart();
  // const {cartItems, setCartItems} = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComlete,] = React.useState(false);
  const [isLoading, setIsloading] = React.useState(false);
  // const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);


  const onClickOrder = async () => {
  try{
    setIsloading(true);
    const { data } = await axios.post('https://6413417ea68505ea732e44de.mockapi.io/cart/', {
      items: cartItems,
    });
    setOrderId(data.id)
    setIsOrderComlete(true);
    setCartItems([]);

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      await axios.delete('https://6413417ea68505ea732e44de.mockapi.io/cart/' + item.id);
      await delay(1000);
    } 
  } catch (error) {
    alert("Не удалось создать заказ")
  }
  setIsloading(false);
  };
    return (
        <div className={`${cardStyles.overlay} ${opened ? cardStyles.overlayVisible : '' } `}>
           <div className={cardStyles.drawer}>
              <h2 className="d-flex justify-between mb-30 ">
                 Корзина<img onClick={onClose} className="cu-p" src="/images/btn-remove.svg" alt="Remove"/>
             </h2>

         
          {items.length > 0 ? (
          <div className="d-flex flex-column flex">
           <div className="items flex">
            {items.map((obj) => (
              <div key={obj.id} className="cartItem d-flex align-center mb-20">
              <div 
               style={{backgroundImage: `url(${obj.imageUrl})`}} 
               className='cartItemImg'>
               </div>
     
               <div className="mr-20 flex">
                 <p className="mb-5">{obj.title}</p>
                 <b>{obj.price}</b>
               </div>
                <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/images/btn-remove.svg" alt="Remove"/>
               </div>
               ))} 
              </div> 
                <div className="cartTotalBlock">
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>{totalPrice}</b>
                  </li>
                  <li>
                    <span>Налог 5%:</span>
                    <div></div>
                  <b>{Math.round(totalPrice / 100 * 5)}</b>
                  </li>
                </ul>
                <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img src="/images/arrow.svg" alt="Arrow"/>
               </button>
              </div>
            </div>

              ): (
        <Info 
              title={isOrderComplete ? "Зaказ оформлен!" : "Корзина пустая"} 
              description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} 
              image={isOrderComplete ? "/images/complete-order.jpg" : "/images/empty-cart.jpg"} />        
       
        )} 
      </div>
      </div>
    );
};

export default Drawer;



