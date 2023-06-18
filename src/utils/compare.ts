import formatter from "./formatter";

interface Snowflake {
    snowflake: string;
    difference: string;
    fastest: boolean;
}

function findFastest(snowflakes: Snowflake[]) {
    let fastestSnowflakeIndex: number = 0;
    let secondFastestSnowflakeIndex: number = 0;

    // Find fastest snowflake
    // For each snowflake in the array
    for (let i = 0; i < snowflakes.length; i++) {
        const currentSnowflake = new formatter(snowflakes[i].snowflake).date.valueOf();

        if (snowflakes[i].snowflake == "") break;
        if (currentSnowflake == 1420070400000) break;
        
        // If current snowflake is faster than fastestSnowflakeIndex, set fastest
        if (currentSnowflake < new formatter(snowflakes[fastestSnowflakeIndex].snowflake).date.valueOf()) {
            fastestSnowflakeIndex = i;
        }
    }

    // Find second fastest snowflake
    for (let i = 0; i < snowflakes.length; i++) {
        // If the initial index is the fastest, add one to index
        if (secondFastestSnowflakeIndex === fastestSnowflakeIndex) secondFastestSnowflakeIndex++;
        // Skip the first fastest snowflake
        if (i === fastestSnowflakeIndex) break;

        const currentSnowflake = new formatter(snowflakes[i].snowflake).date.valueOf();
        
        if (snowflakes[i].snowflake == "") break;
        if (currentSnowflake == 1420070400000) break;
        
        // If currentSnowflake is faster than secondFastestSnowflakeIndex, set second fastest
        if (currentSnowflake < new formatter(snowflakes[secondFastestSnowflakeIndex].snowflake).date.valueOf()) {
            secondFastestSnowflakeIndex = i;
        }
    }
    
    return { fastestSnowflakeIndex, secondFastestSnowflakeIndex };
}

function compare(snowflakes: Snowflake[]) {
    console.log("SNOWFLAKES: ", snowflakes);

    const { fastestSnowflakeIndex, secondFastestSnowflakeIndex } = findFastest(snowflakes);

    // Set differences
    for (let i = 0; i < snowflakes.length; i++) {
        if (i == fastestSnowflakeIndex) {
            snowflakes[i].difference = "Fastest";
        }
        else if (BigInt(snowflakes[i].snowflake) < 1420070400000) {
            break;
        }
        else {
            const date1 = (new formatter(snowflakes[fastestSnowflakeIndex].snowflake)).date.valueOf();
            const date2 = (new formatter(snowflakes[i].snowflake)).date.valueOf();
    
            console.log(date1, date2)
    
            const ms: any = Math.abs(date1 - date2);

            const seconds = ms / 1000;
            const minutes = seconds / 60;
            const hours = minutes / 60;
            const days = hours / 24;
            const msexcess = Math.floor(ms % 1000);

            const daysFormat = Math.floor(days) != 0 ? `${Math.floor(days)}d ` : "";
            const hoursFormat = Math.floor(hours % 24) != 0 ? `${Math.floor(hours % 24)}h `: "";
            const minutesFormat = Math.floor(minutes % 60) != 0 ? `${Math.floor(minutes % 60)}m `: "";
            const secondsFormat = Math.floor(seconds % 60) != 0 ? `${Math.floor(seconds % 60)}s `: "";
            const msFormat = `${msexcess}ms`;

            let difference = "+" + daysFormat + hoursFormat + minutesFormat + secondsFormat + msFormat;
    
            snowflakes[i].difference = difference;
        }
    }

    const newSnowflakes = snowflakes.map((snowflake, id) => (
        id === fastestSnowflakeIndex ? { ...snowflake, fastest: true } : { ...snowflake, fastest: false }
    ));

    return newSnowflakes;
}

export default compare;