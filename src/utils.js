
export function getData(label) {
    const data = window && window.localStorage.getItem(label);
    return data
}

export function setData(label, data) {
    if (window && window.localStorage)
        localStorage.setItem(label, JSON.stringify(data));
}


export function formatDate(val, format) {
    if (format == "MM DD") {
        const date = new Date(val * 1000); // Convert seconds to milliseconds

        // Get the month and day names
        const monthNames = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];

        const month = monthNames[date.getMonth()];
        const day = date.getDate();

        return `${month} ${day}`;
    }
}

export function getDaysDate(dates) {
    let allDates = dates.flat()
    // weekday: 'long', day: 'numeric', month: 'long'
    // hour: 'numeric', minute: '2-digit', hour12: true
    let allDays = allDates.map((v) => convertToFormattedDate(v, { weekday: 'long' }))
    let uniqueDays = new Set(allDays);

    let allmonths = allDates.map((v) => convertToFormattedDate(v, { month: 'long' }))
    let uniquemonth = new Set(allmonths);

    let allDaysDates = allDates.map((v) => convertToFormattedDate(v, { day: 'numeric', }))
    let uniqueDaysDates = new Set(allDaysDates);

    let allTime = allDates.map((v) => convertToFormattedDate(v, {hour: 'numeric', minute: '2-digit', hour12: true }))
    let uniqueTime = new Set(allTime);

    let finalSting = `${[...uniqueDays].join(" & ")}, ${[...uniquemonth].join(" & ")} ${[...uniqueDaysDates].join(" & ")}`

    let finalStringTime = `${[...uniqueTime].join(" - ")}`
    return { date: finalSting, time: finalStringTime };
}

export const convertToFormattedDate = (timestamp, option = {}) => {
    // Convert timestamp to Date object
    const dateObject = new Date(timestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds

    // Format the Date object
    const formattedDate = dateObject.toLocaleString("en-US", { ...option });

    return formattedDate;
}