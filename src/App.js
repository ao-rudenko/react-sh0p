import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";


function App() {
  
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
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
    if (!obj){
      setCartItems(prev => [...prev, obj]);
    }
  }

  const onChangeSearchInput= (event)=>{
    
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened &&<Drawer items={cartItems} onClose={()=>setCartOpened(false)}/>}
      <Header onClickCart={()=>setCartOpened(true)} />
      <div className="content p-40 ">
        <div className="d-flex align-center m-0 mb-40 justify-between">
          <h1> {searchValue ? `Поиск по запросу: "${searchValue}"` : "All products"} </h1>
          <div className="search-block d-flex pl-10"> 
            <img src="./img/search.svg" alt="Search"/>
            < input onChange = {onChangeSearchInput} value={searchValue}
            placeholder = "Поиск" />
            <img className="clear cu-p" src="/img/btn-remove.svg" alt="Close" />
            
          </div>
        </div>
        <div className="card-field d-flex flex-wrap">
            {/* Карточки товара */}
            {
              items.map((item) => (
                <Card 
                  key = {item.vendorCode}
                  v_code = {item.vendorCode}
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
