import styles from './Card.module.scss'
import {useState} from 'react';

function Card({url, name, price, onPlus, onFavorite}) {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        onPlus({url, name, price});
        setIsAdded(!isAdded);
    } 

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/heart-unliked.svg" alt="heart-unliked" />
            </div>
            <img width={133} height={112} src={url} alt="" />
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus} 
                    onClick={onClickPlus} 
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus" />
            </div>
        </div>
    )
}

export default Card;