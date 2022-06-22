import React from 'react'

export const Card = () => {
  return (
            < div className = "card" >
                <div className = "favorite" >
                    <img width = {32} height = {32} src = "/img/like-inactive.svg" alt = "#"/>
                    </div> 
                    <img width = {133} height = {112} src = "/img/snk/335.jpg"  alt = "snk" />
                <h5> Кроссы </h5> <div className = "d-flex justify-between align-center">
                <div className = "d-flex flex-column" >
                  <span> Цена </span> <strong> 1234 RUR </strong> 
                </div>
                <img src = "/img/btn-add.svg" alt = "add" />
                </div> 
                </div>
                
  )
}
export default Card;