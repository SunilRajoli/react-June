export default function Object() {
    const Products = [
        {id: 1, name: "Laptop", price: 500},
        {id: 2, name: "Mobile", price: 50},
        {id: 3, name: "PC", price: 900},
        {id: 4, name: "Laptop", price: 600} 
    ]
    const productList = Products.map((product) => (
        <h3 key={product.id}>{product.name}: ${product.price}</h3>
    ))
    return <div>
        <h3>{productList}</h3>
    </div>
}