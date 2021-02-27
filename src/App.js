import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [nayoks,setNayoks] =useState([])
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> setNayoks(data))
  },[])

  // const nayoks = [{name:'amir',age:34},{name:'jamir',age:65},{name:'abdul',age:29},{name:'kobir',age:19},{name:'sakib',age:49}]
  // const ages =[45, 76, 32, 64,53]
  return (
    <div className="App">
      <MovieCounter ></MovieCounter>
          {
          nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>)
           // nayoks.map(nayok=> <li>{nayok}</li>)
            }
      {/* <div>
      
      <Nayok name={nayoks[3]}></Nayok>
          <Nayok name='provas'></Nayok>
          <Nayok name='vivek' age={ages[1]}></Nayok>
          <Nayok name={nayoks[2]} age="39"></Nayok>
          <Nayok name='sunil' age={ages[3]}></Nayok>
          <Nayok name='jashim'></Nayok>
          <Nayok></Nayok>
      </div> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
function MovieCounter(){
  // const result=['jamal','kamal','rofiq']
  // const first = result[0];
  // const second = result[1];
  const [count,setCount]=useState(0);
// console.log(count,setCount);
const handleClick = ()=> setCount (count + 1);

  
return(
  <div >
    <button onClick={handleClick}>Add Movie</button>
    <h3>Number of movies : {count}</h3>
    <MovieDisplay movies={count}></MovieDisplay>
    <MovieDisplay movies={count +6}></MovieDisplay>
    <MovieDisplay movies={count}></MovieDisplay>
    <MovieDisplay movies={count+ 7}></MovieDisplay>
    <MovieDisplay></MovieDisplay>
  </div>
)
}

function MovieDisplay(props){
  return (
    <h4>Movie I have acted:{props.movies} </h4>
  )
}

function Nayok(props){
  // console.log(props)
  const nayokStyle ={
    border:'5px solid purple',
    margin:'20px'
  }
  return (
        <div style={nayokStyle}>
          <h1>Ami Nayok - {props.name} </h1>
          <h3>I have done 5 movies in {props.age} years</h3>
        </div>
    
    
  )
  
}
export default App;
