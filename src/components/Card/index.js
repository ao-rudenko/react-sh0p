import React from 'react';
import styles from './Card.module.scss';

function Card(props){
  const [isAdded, setIsAdded] =React.useState(false);
  const onClickPlus = () =>{
    setIsAdded(!isAdded);
  }
  
  return (
    <div className = {styles.card} >
      < div className = {styles.favorite} onClick={props.onClickFavorite}>
        <img width = {32} height = {32} src = "/img/like-inactive.svg" alt = "#"/>
      </div>
      <img width = {133} height = {112} src = {props.imageUrl}  alt = "snk" />
      <h5>{props.name}</h5> 
      <div className = "d-flex justify-between align-center">
        <div className = "d-flex flex-column" >
          <span> Цена: </span> <strong> {props.price} RUR </strong>
        </div>
        <img className={styles.plus} onClick={onClickPlus} src = {isAdded? "./img/added.svg":"./img/btn-add.svg"} alt = "add" />
      </div> 
    </div>
                
  )
}
export default Card;