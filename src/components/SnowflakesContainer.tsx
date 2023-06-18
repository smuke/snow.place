import { useState } from "react";
import SnowflakeItem from "./SnowflakeItem";
import compare from "../utils/compare";

function SnowflakesContainer() {
    const [snowflakes, setSnowflakes] = useState([
        {
            snowflake: "",
            difference: "",
            fastest: false,
        },
        {
            snowflake: "",
            difference: "",
            fastest: false,
        },
    ]);

    function updateSnowflake(id: number, snowflake: string) {
        // Add new snowflake to an array pass into compare function
        const newSnowflakes = compare([
            ...snowflakes.slice(0, id),
            {
                snowflake,
                difference: "",
                fastest: false,
            },
            ...snowflakes.slice(id + 1),
        ]);

        setSnowflakes(newSnowflakes);
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {snowflakes.map((snowflake, index) => (
                <SnowflakeItem
                    key={index}
                    id={index}
                    snowflake={snowflake.snowflake}
                    difference={snowflake.difference}
                    fastest={snowflake.fastest}
                    updateSnowflake={updateSnowflake}
                />
            ))}
        </form>
    );
}

export default SnowflakesContainer;
