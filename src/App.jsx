import { useState } from "react";
import {Checkbox} from "./components/Checkbox";
import {Input} from "./components/Input";
import {ProductCategoryRow} from "./components/ProductCategoryRow";
import {ProductRow} from "./components/ProductRow";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]


function App() {

  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState('')

  const visibleProducts = PRODUCTS.filter(product => {
    if (showStockedOnly && !product.stocked || search && !product.name.includes(search)) {
      return false
    }
    return true
  })

  return <div>
    <SearchBar
      search={search}
      onSearchChange={setSearch}
      showStockedOnly={showStockedOnly}
      onStockedOnlyChange={setShowStockedOnly} />
    <ProductTable products={visibleProducts}/>
  </div>
}

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {
  return <div>
    <Input
      value={search}
      onChange={onSearchChange}
      placeholder="Rechercher ..."/>
    <Checkbox
      id="stocked"
      checked={showStockedOnly}
      onChange={onStockedOnlyChange}
      label="N'affichez que les produits en stock"/>
  </div>
}

function ProductTable({products}) {

  const rows = []
  let lastCategory = null

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
    }
    lastCategory = product.category
    rows.push(<ProductRow key={product.name} product={product} />)
  }

  return <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}

export default App
