import React from "react";
import Card from "../component/Card/Card";
import axios from "axios";
import AppContext from "../context";


function Orders () {
    const {onAddToCard, onAddToFavorite } = React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try{
                const { data } = await axios.get('https://6413417ea68505ea732e44de.mockapi.io/cart')
            setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
            setIsLoading(false);
            } catch(error) {
                alert('Ошибка');
                console.log(error);
            }
        })();

    }, []);


   return (
    <div className="content p-40">
     <div className="d-flex align-center justify-between mb-40">
      <h1>Мои заказы</h1>
     </div>

        <div className="d-flex flex-wrap">                
           {orders.map((item, index) =>(
             <Card
             key={index}
             onFavorite={(obj) => onAddToFavorite(obj)}
             onPlus={(obj) => onAddToCard(obj)}
             loading={isLoading}
             {...item}
           />
          ))}
        </div>
  </div>

    );
}

export default Orders;