import React from 'react'
import background from "../img/snk/335.jpg"
export const Drawer = (props) => {
  return (
    < div className = "drawer-block" >
    <div className = "drawer">
        <h2 className = "mb-30 d-flex justify-between"> Корзина <img  onClick={props.onClose} className = "cu-p" src = "/img/btn-remove.svg" alt = "Close"/></h2>
        <div className = "items">
            <div className = "d-flex align-center cartItem justify-between mb-20">
                {/* <img className="mr-30 ml-10" width={70} height={70} src="/img/snk/335.jpg" alt="img" /> */ }
                <div style = {{backgroundImage: `url(${background})`}} className = "cartItemImg mr-30 ml-10" > </div>
                <div className = "cartDescription mr-30" ><p className = "mb-5" > Кроссы Кроссы Кроссы Кроссы </p> 
                    < strong > 1234 RUR </strong >
                </div>
                <img className = "removeBtn mr-10" src = "/img/btn-remove.svg" alt = "remove"/>
            </div>
            <div className = "d-flex align-center cartItem justify-between mb-20" >
                {/* <img className="mr-30 ml-10" width={70} height={70} src="/img/snk/335.jpg" alt="img" /> */ } 
                <div style = {{backgroundImage: `url(${background})`}} className = "cartItemImg mr-30 ml-10" ></div>
                <div className = "cartDescription mr-30">
                    <p className = "mb-5"> Кроссы Кроссы Кроссы Кроссы </p> 
                    <strong> 1234 RUR </strong> 
                </div>
                <img className = "removeBtn mr-10" src = "/img/btn-remove.svg" alt="remove"/>
            </div>
        </div>
        <div class = "cartTotalBlock" >
            <ul>
                <li className = "d-flex" >
                    <span> Итого: </span>
                    <div></div>
                    <strong> 1234 RUR </strong>  
                </li> 
                <li>
                    <span> Налог 5 %: </span>
                    <div></div>
                    <strong> 123 RUR </strong>
                </li>
            </ul>
            <button className = "greenButton">
                <span> Оформить заказ </span>
                <img className="orderRright" src="/img/right.svg" alt="order"/>
            </button >
        </div>
    </div>
    </div>
  )
}
export default Drawer;