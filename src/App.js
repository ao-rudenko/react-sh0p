import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";


function App() {
  
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(()=>{
      fetch('https://62cf110c826a88972d08880c.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  },[]);

  const onAddToCart= (obj)=>{
    setCartItems(prev => [...prev, obj]);
  }

  return (
    <div className="wrapper clear">
      {cartOpened &&<Drawer items={cartItems} onClose={()=>setCartOpened(false)}/>}
      <Header onClickCart={()=>setCartOpened(true)} />
      <div className="content p-40 ">
        <div className="d-flex align-center m-0 mb-40 justify-between">
          <h1>  All products</h1>
          <div className="search-block d-flex pl-10"> 
            <img src="./img/search.svg" alt="Search"/>
            <input placeholder="Поиск"/>
            
          </div>
        </div>
        <div className="card-field d-flex flex-wrap">
            {/* Карточки товара */}
            {
              items.map((item, id) => (
                <Card 
                  key = {id}
                  name = {item.name}
                  price = {item.price}
                  imageUrl = {item.imageUrl}
                  onClickFavorite={()=> console.log("+1")}
                  onClick_addCart = {(obj) =>onAddToCart(obj)}
                />
              ))
              }
              
        </div>
      </div>
    </div>
  );
}

export default App;
