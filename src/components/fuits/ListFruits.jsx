import ItemFruit from "./ItemFruit";
const ListFruits = ({ fruits }) => {

    return (
        <ul>
            {
                fruits.map((fruit, index) => (
                    <ItemFruit key={index} fruta={fruit} />
                ))
            }
        </ul>)
}

export default ListFruits;