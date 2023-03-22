import React from 'react';
import cardStyles from './Card.module.scss';


function Card ({id, title, imageUrl, price, onFavorite, onPlus, favorited = false}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    }
    const onClickFavorite = () => {
        onFavorite({id, title, imageUrl, price});
        setIsFavorite(!isFavorite);
    }
    return (
        <div className={cardStyles.card}>
    <div className={cardStyles.favorite} onClick={onClickFavorite} >
        <img src={isFavorite ? '/images/heart-liked.svg' : '/images/heart-unliked.svg'} alt="Unliked" />
    </div>
        <img width={133} height={112} src={imageUrl} alt="" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>{price} грн</b>
    </div>
  <img className={cardStyles.plus} onClick={onClickPlus}  src={isAdded ? '/images/btn-cheked.svg' : '/images/btn-plus.svg'}/>
 </div>
</div>
    );
};

export default Card;