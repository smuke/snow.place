import SnowflakeItem from "./SnowflakeItem"

function SnowflakesContainer() {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <SnowflakeItem />
        </form>
    )
}

export default SnowflakesContainer;