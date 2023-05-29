const discordEpoch: number = 1420070400000;

class Formatter {
    date: Date;
    constructor(snowflake: string) {
        const idint = BigInt.asUintN(64, BigInt(snowflake));
        const binarydate = Number(idint >> 22n);
        this.date = new Date(binarydate + discordEpoch);
    }

    local() {
        return (
            `${this.date.getMonth() + 1}/${this.date.getDate()}/${this.date.getFullYear()} ` +
            this.date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",

            hour12: true
            })
        )
    }

    // Probably not the best way...
    localTimeZone() {
        return this.date.toLocaleTimeString('en-us', { timeZoneName:'short' }).split(' ')[2];
    }

    utc() {
        return (
            `${this.date.getMonth() + 1}/${this.date.getDate()}/${this.date.getFullYear()} ` +
            this.date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",

            hour12: true,
            timeZone: "UTC"
            })
        )
    }

}

export default Formatter;