import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
{/* <Counter></Counter> */}
<ExternalUser></ExternalUser>
   
    </div>
  );
}

function ExternalUser(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return(
    <div>
      <h2>External User</h2>
      <p>{users.length}</p>
      {
        users.map(user=><User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
return(
  <div style={{border:"1px solid red", margin:'50px'}}>
    <h3>Name:{props.name}</h3>
    <h4>Email:{props.email}</h4>
  </div>
)
}
function Counter(){
  const [count, setCount]=useState(0)
  // const increaseCount=()=>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  const increaseCount=()=>setCount(count+1);
  const decreaseCount=()=>setCount(count-1);
  return(
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Increase</button>
    </div>
  )
}
export default App;
//----------------All Comment-------------------
//javascript updated
// function Product(props){
// return <div className='product'>
//   <h3>Name: {props.name}</h3>
//   <p>Price: {props.price}</p>
// </div>
// }
// const products=[
//   {name:"Laptop",Price:2000},
//   {name:"Mobile",Price:20000},
//   {name:"Rice Cooker",Price:2000},
//   {name:"Router",Price:4000},
//   {name:"Mouse",Price:200},
//   {name:"Keyboard",Price:2000},
// ]
 {/* <Product name="Laptop" price="20000"></Product>
    <Product name="Phone" price="10000"></Product>
    <Product name="Watch" price="1000"></Product> */}
    // {
    //   products.map(product => <Product name={product.name} price={product.Price}></Product>)
    // }