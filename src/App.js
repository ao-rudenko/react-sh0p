import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      
        <Drawer/>

      <Header/>
      <div className="content p-40 ">
        <div className="d-flex align-center m-0 mb-40 justify-between">
          <h1>  All products</h1>
          <div className="search-block d-flex pl-10"> 
            <img src="./img/search.svg" alt="Search"/>
            <input placeholder="Поиск"/>
          </div>
        </div>
        <div className="card-field d-flex">
            {/* Карточки товара */}
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
