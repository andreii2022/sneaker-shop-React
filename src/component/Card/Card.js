import React from 'react';
import cardStyles from './Card.module.scss';


function Card (props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(true);
    }
    return (
        <div className={cardStyles.card}>
<div className={cardStyles.favorite}>
  <img src="/images/heart-unliked.svg" alt="Unliked" />
</div>
<img width={133} height={112} src={props.imageUrl} alt="" />
<h5>{props.title}</h5>
<div className="d-flex justify-between align-center">
<div className="d-flex flex-column">
<span>Цена:</span>
<b>{props.price} грн</b>
</div>
<img className={cardStyles.plus} onClick={onClickPlus}  src={isAdded ? '/images/btn-cheked.svg' : '/images/btn-plus.svg'}/>
</div>
</div>
    );
};

export default Card;