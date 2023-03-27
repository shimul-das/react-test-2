import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:"Laptop",Price:2000},
    {name:"Mobile",Price:20000},
    {name:"Rice Cooker",Price:2000},
    {name:"Router",Price:4000},
    {name:"Mouse",Price:200},
    {name:"Keyboard",Price:2000},
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.Price}></Product>)
      }
    {/* <Product name="Laptop" price="20000"></Product>
    <Product name="Phone" price="10000"></Product>
    <Product name="Watch" price="1000"></Product> */}
    </div>
  );
}

function Product(props){
return <div className='product'>
  <h3>Name: {props.name}</h3>
  <p>Price: {props.price}</p>
</div>
}

export default App;
