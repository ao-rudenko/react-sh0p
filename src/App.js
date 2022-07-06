import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  { 
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 1234,
    imageUrl: './img/snk/1.jpg'
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 1234,
    imageUrl:'./img/snk/2.jpg'
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 1234,
    imageUrl: './img/snk/3.jpg'
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 1234,
    imageUrl: './img/snk/4.jpg'
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 1234,
    imageUrl: './img/snk/1.jpg'
  }, {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 1234,
    imageUrl: './img/snk/2.jpg'
  }, {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 1234,
    imageUrl: './img/snk/3.jpg'
  }, {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 1234,
    imageUrl: './img/snk/4.jpg'
  },
]

function App() {
  return (
    <div className="wrapper clear">
      
        <Drawer/>

      <Header/>
      <div className="content p-40 ">
        <div className="d-flex align-center m-0 mb-40 justify-between">
          <input placeholder = "Поиск" / >
          <h1>  All products</h1>
          <div className="search-block d-flex pl-10"> 
            <img src="./img/search.svg" alt="Search"/>
            <input placeholder="Поиск"/>
            
          </div>
        </div>
        <div className="card-field d-flex">
            {/* Карточки товара */}
            {
              arr.map(obj => ( 
              <Card 
              name = {obj.name}
              price = {obj.price}
              imageUrl = {obj.imageUrl}
              onClick = {() => console.log(obj)
              }
              />
              ))
              }
              
        </div>
      </div>
    </div>
  );
}

export default App;
