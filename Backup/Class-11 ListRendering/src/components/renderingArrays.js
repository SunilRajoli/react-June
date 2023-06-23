export default function Fruits() {
    const Fruits = ["Apple", "Banana", "Grape"]
    const fruitList = Fruits.map((Fruit, index) => (
        <h3>{Fruit}</h3>
    ))
    return <div>
        {fruitList}
    </div>

}