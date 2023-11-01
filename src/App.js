import React from "react";
import axios from 'axios';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";



function App() {
  
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(()=>{
    axios.get('https://62cf110c826a88972d08880c.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://62cf110c826a88972d08880c.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  },[]);

  const onAddToCart = (obj)=>{
    axios.post('https://62cf110c826a88972d08880c.mockapi.io/cart', obj);
    console.log(obj);
    setCartItems((prev) => [...prev, obj]);
    
  }
  const onRemoveItem = (id) =>{
    axios.delete(`https://62cf110c826a88972d08880c.mockapi.io/cart${id}`);
    // setCartItems((prev) => [...prev, obj]);

  }
  const onChangeSearchInput= (event)=>{
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={(onRemoveItem)}/>}
      <Header onClickCart={()=>setCartOpened(true)} />
      <div className="content p-40 ">
        <div className="d-flex align-center m-0 mb-40 justify-between">
          <h1> {searchValue ? `Поиск по запросу: "${searchValue}"` : "All products"} </h1>
          <div className="search-block d-flex pl-10"> 
            <img src="./img/search.svg" alt="Search"/>
            < input onChange = {onChangeSearchInput} value={searchValue}
            placeholder = "Поиск" />
            {searchValue &&<img onClick={()=> setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Clear" />}
            
          </div>
        </div>
        <div className="card-field d-flex flex-wrap">
            {/* Карточки товара */}
            {items
            .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item) => (
                <Card 
                  key = {item.vendorCode}
                  v_code = {item.vendorCode}
                  name = {item.name}
                  price = {item.price}
                  imageUrl = {item.imageUrl}
                  onClickFavorite={()=> console.log('В закладках')}
                  onClick_addCart = {(obj) => onAddToCart(obj)}
                />
              ))
              }
              
        </div>
      </div>
    </div>
  );
}

export default App;
