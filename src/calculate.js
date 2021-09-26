import { DateTime } from "luxon";

const discordEpoch = 1420070400000;

function Calculate(snowflake) {
    return ({
            local: {
                timestamp: getDate(snowflake, "local"),
                type: DateTime.local().toFormat("ZZZZ")
            },
            UTC: {
                timestamp: getDate(snowflake, "utc"),
                type: "UTC"
            }
    })
}

function getDate(snowflake, type) {
    // Convert to date
    const date = new Date((snowflake / 4194304) + discordEpoch);
    // Format date
    return makePretty(date, type);
}

// Format date
function makePretty(date, type) {
    if (type === "local") {
        return (
            `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ` +
            date.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
    
                hour12: true
            })
        )
    }
    else if (type === "utc") {
        return (
            `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ` +
            date.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
    
                hour12: true,
                timeZone: "UTC"
            })
        )
    }
}

export default Calculate;