

export default function Product() {
    const products = ["Laptop", "Phone", "Computer"]
    const productItems = products.map((product) => <h3>{product}</h3>)
    return <div>{productItems}</div>
}