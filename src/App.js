import { useEffect, useState } from "react";
import { getProducts } from "./helper/api";
import GetSingle from "./getSingle";

function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    getProducts()
      .then(resp=>setData(resp))
  },[])
  return (
    <div className="App">
      <ol>
        {
          data.map((el)=><li key={el.id} > {el.title} </li>)
        }
      </ol>
        <h1>Single</h1>
      <GetSingle/>
      
    </div>
  );
}

export default App;
