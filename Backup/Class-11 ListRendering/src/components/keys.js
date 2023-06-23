import React from 'react'

function Keys() {
    const products = ["Laptop", "Mobile", "PC", "Laptop"]
    const productItems = products.map((product) => (
        <h3 key={product}>{product}</h3>
    ))
    return <div>
        <h3>{productItems}</h3>
    </div>
}

export default Keys