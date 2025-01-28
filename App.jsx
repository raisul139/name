import FirstCompo from "./FirstCompo.jsx"
import { useEffect, useState } from "react"
function App() {

//const [catagories,setCatagories] = useState([])
const [categories, setCategories] = useState([]);
function showData(){

  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then(data=>data.json())
  .then(data=>{
    setCategories(data.categories)
  })

  .catch(err=>console.log(err))
  
}
function hidden(){
  setCategories([])
}


return(
  <div>
    <h1>Meal DB</h1>
    <h1> Meal item: {categories.length}</h1>

    <button onClick={showData}>SHow Item</button>
    <button onClick={hidden}>Hide item</button>
    <h2>Total categories:{categories.length}</h2>
    {
      categories.map(data=> <FirstCompo key={data.IdCategory} props={data}></FirstCompo>)
    }

  </div>
)

}

export default App