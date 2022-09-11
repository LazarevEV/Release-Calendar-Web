// Date UTILS
function getMonthFromString(monthName) {
    return new Date(Date.parse(monthName + " 1, 2012")).getMonth()
}

function getLastDayOfMonth(dateObject) {
    return new Date(dateObject.year, getMonthFromString(dateObject.month), 0).getDate()
}

// Functions
export function getTodayDate() {
    const todayDate = new Date()

    return {
        month: todayDate.toLocaleString('en-GB', { month: 'long' }),
        year: todayDate.getFullYear()
    }
}

export function getMonthDaysList(dateObject) {
    const startDate = new Date(dateObject.year, getMonthFromString(dateObject.month), 1)
    const endDate = new Date(dateObject.year, getMonthFromString(dateObject.month), getLastDayOfMonth(dateObject))

    const date = new Date(startDate.getTime());
    const dates = [];
    while (date <= endDate) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    return dates;
}