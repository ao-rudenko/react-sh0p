function Drawer({ onClose,onRemove, items=[]}){
  return (
    < div className = "drawer-block" >
        <div className = "drawer">
            <h2 className = "mb-30 d-flex justify-between"> 
            Корзина {' '}
            <img  onClick={onClose} className = "cu-p" src = "/img/btn-remove.svg" alt = "Close"/></h2>
            <div className = "items">
                {items.map((obj)=>(
                    <div className = "d-flex align-center cartItem justify-between mb-20" >
                        <div style = {{backgroundImage: `url(${obj.imageUrl})`}} className = "cartItemImg mr-30 ml-10" >
                        </div>
                        <div className = "cartDescription mr-30" > 
                            <p className = "mb-5"> {obj.v_code} </p>
                            <p className = "mb-5"> {obj.name} </p>
                            <strong > {obj.price} RUR</strong>
                        </div> 
                        <img onClick={()=> {onRemove(obj.v_code)}} className = "removeBtn mr-10" src = "/img/btn-remove.svg" alt = "remove" />
                    </div>
                ))}
            </div>
            <div className = "cartTotalBlock" >
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