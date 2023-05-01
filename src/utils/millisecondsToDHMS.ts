// Convert a given amount of milliseconds, to days, hours, minutes and seconds.

interface DHMS {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
}

export default function mToDHMS(milliseconds: number): DHMS {
    const msToSecondsDivider = 1000;
    const secondsToDaysDivider = 86000;
    const secondsToHoursDivider = 3600;
    const secondsToMinutesDivider = 60;

    let seconds = milliseconds / msToSecondsDivider;

    const days = Math.floor(seconds / secondsToDaysDivider);
    seconds = seconds - (days * secondsToDaysDivider);

    const hours = Math.floor(seconds / secondsToHoursDivider);
    seconds = seconds - (hours * secondsToHoursDivider);

    const minutes = Math.floor(seconds / secondsToMinutesDivider);
    seconds = seconds - (minutes * secondsToMinutesDivider);

    seconds = Math.floor(seconds);

    return {
        days,
        hours,
        minutes,
        seconds
    }
}
