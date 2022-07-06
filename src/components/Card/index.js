import React from 'react';
import styles from './Card.module.scss';
// import { } from 
function Card(props){
  return (
    <div className = {styles.card} >
      < div className = {styles.favorite}>
        <img width = {32} height = {32} src = "/img/like-inactive.svg" alt = "#"/>
      </div>
      <img width = {133} height = {112} src = {props.imageUrl}  alt = "snk" />
      <h5>{props.name}</h5> 
      <div className = "d-flex justify-between align-center">
        <div className = "d-flex flex-column" >
          <span> Цена: </span> <strong> {props.price} RUR </strong>
        </div>
        <button className="button" onClick={props.onClick}>
          <img width={11} height={11} src = "/img/btn-add.svg" alt = "add" />
            </button>
      </div> 
    </div>
                
  )
}
export default Card;