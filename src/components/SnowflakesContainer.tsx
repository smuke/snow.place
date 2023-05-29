import { useState } from "react";
import SnowflakeItem from "./SnowflakeItem";

function SnowflakesContainer() {
    const [snowflakes, setSnowflakes] = useState([
        {
            difference: "-1m 23s",
            fastest: true,
        },
        {
            difference: "+1m 23s",
        },
    ]);

    interface newItem {
        difference: string;
        fastest: boolean;
    }

    // Update snowflakes with new item
    // New item has difference and fastest
    function handleSetSnowflakes(id: number, newItem: newItem) {
        setSnowflakes((prevSnowflakes) => {
            return [
                ...prevSnowflakes.slice(0, id),
                newItem,
                ...prevSnowflakes.slice(id + 1),
            ];
        });
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {snowflakes.map((snowflake, index) => (
                <SnowflakeItem
                    key={index}
                    id={index}
                    snowflake={snowflake}
                    setSnowflakes={handleSetSnowflakes}
                />
            ))}
        </form>
    );
}

export default SnowflakesContainer;
