export default ProductRow

function ProductRow(product) {
  return <>
    <p>{product.name} : {product.price}</p>
  </>
}
