import { useState, useEffect } from 'react'


import Card from './components/Card/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened]=useState(false);
  useEffect(() => {
    fetch('https://6149d8e307549f001755a64e.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }
  
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClickCart={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex justify-between">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card 
              name={item.name} 
              price={item.price} 
              url={item.url}
              onFavorite={() => console.log('Добавили в закладки') }
              onPlus={(obj) => onAddToCart(obj)}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
