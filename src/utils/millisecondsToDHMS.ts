// Convert a given amount of milliseconds, to days, hours, minutes and seconds.

interface DHMS {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
}

export default function mToDHMS(milliseconds: number): DHMS {
    const daysMS = 1 * 8.64e+7;
    const days = milliseconds / daysMS;

    milliseconds = milliseconds - (days * daysMS);

    const hoursMS = 1 * 3.6e+6;
    const hours = milliseconds / hoursMS;
    milliseconds = milliseconds - (hours * 3.6e+6);

    const minutes = milliseconds / 60000;
    milliseconds = milliseconds - (minutes * 60000);

    const seconds = milliseconds / 1000;
    milliseconds = milliseconds - (seconds * 1000);

    return {
        days,
        hours,
        minutes,
        seconds
    }
}
