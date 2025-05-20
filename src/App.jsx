import { Fragment } from "react";
import { useState } from "react";
import Checkbox from "./components/checkbox";
import Input from "./components/input";
import ProductCategoryRow from "./components/productCategoryRow";
import ProductRow from "./components/productRow";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]


function App() {
  return <>
    <SearchBar/>
    <ProductTable/>
  </>
}

function SearchBar() {
  return <>
    <Input/>
    <Checkbox/>
  </>
}

function ProductTable() {
  return <>
    PRODUCTS.forEach {

    }
    <ProductCategoryRow product/>
    <ProductRow product/>
  </>
}

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return <>
    <p>Nombre de ploucs : {count} </p>
    <button onClick={increment}>+</button>
  </>
}

export default App
