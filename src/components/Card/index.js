import React from 'react';
import styles from './Card.module.scss';

function Card({  onClickFavorite,  imageUrl,  name,  price,  onClick_addCart
}) {
  const [isAdded, setIsAdded] =React.useState(false);
  const onClickPlus = () =>{
    onClick_addCart({name, imageUrl, price });
    setIsAdded(!isAdded);
  }
  
  return (
    <div className = {styles.card} >
      < div className = {styles.favorite} onClick={onClickFavorite}>
        <img width = {32} height = {32} src = "/img/like-inactive.svg" alt = "#"/>
      </div>
      <img width = {133} height = {112} src = {imageUrl}  alt = "snk" />
      <h5>{name}</h5> 
      <div className = "d-flex justify-between align-center">
        <div className = "d-flex flex-column" >
          <span> Цена: </span> <strong> {price} RUR </strong>
        </div>
        <img className={styles.plus} onClick={onClickPlus} src = {isAdded? "./img/added.svg":"./img/btn-add.svg"} alt = "add" />
      </div> 
    </div>
                
  )
}
export default Card;