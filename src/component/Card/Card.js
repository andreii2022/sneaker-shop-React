import React from 'react';
import cardStyles from './Card.module.scss';


function Card (props) {
    const onClickButton =()=>{
        alert( props.titile);
    }
    return (
        <div className={cardStyles.card}>
<div className="favorite">
  <img src="/images/heart-unliked.svg" alt="Unliked" />
</div>
<img width={133} height={112} src={props.imageUrl} alt="" />
<h5>{props.title}</h5>
<div className="d-flex justify-between align-center">
<div className="d-flex flex-column">
<span>Цена:</span>
<b>{props.price} грн</b>
</div>
<button className="button" onClick={()=> onClickButton ()}>
<img width={11} height={11} src="/images/plus.svg" alt="Plus" />
</button>
</div>
</div>
    );
};

export default Card;