import { useState } from "react"
import { Forms } from "./Forms"


const Products = ({ name, checked }) => {
  return (
    <li>{name} {checked ? "✅" : "❌"}</li>
  )
}

export const ShoppingCart = () => {
  const productsCollection = [
    { id: 1, name: "Apple", checked: true },
    { id: 2, name: "Fish", checked: false },
    { id: 3, name: "Meet", checked: false },
  ]
  const [products, setProducts] = useState(productsCollection);

  const onAddProduct = (product) => {
    if (!product) return

    const newProduct = {
      id: products.length + 1,
      name: product,
      checked: false
    }
    setProducts([...products, newProduct])
  }
  return (
    <>
      <h1>Shopping Cart</h1>
      {/* Draw current products */}
      <ol>
        {products.map(product =>
            <Products key={product.id} name={product.name} checked={product.checked} />
        )}
      </ol>
      {/* Form component for add new products */}
      <Forms storeProductValue={onAddProduct} />
    </>
  )
}