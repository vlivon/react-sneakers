import Card from './components/Card/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, url: './img/sneakers/1.jpg' },
  { name: 'Мужские Кроссовки Nike Air Max 270', price: 8999, url:  './img/sneakers/2.jpg'},
  { name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8499, url:  './img/sneakers/3.jpg' },
  { name: 'Мужские Кроссовки Nike LeBron XVIII', price: 11999, url:  './img/sneakers/4.jpg' },
];

function App() {

  
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex justify-between">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card title={obj.name} price={obj.price} url={obj.url}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
