import { range } from "./utils"

// Date UTILS
export function getMonthFromString(monthName) {
    return new Date(Date.parse(monthName + " 1, 2012")).getMonth()
}

function getLastDayOfMonth(dateObject) {
    return new Date(dateObject.year, getMonthFromString(dateObject.month), 0).getDate()
}

export function fillLeadingAndTrailingDates(daysArray) {
    const leftMostDate = daysArray[0]
    const rightMostDate = daysArray[daysArray.length - 1]

    let daysArrayAdj = [...daysArray]
    if (leftMostDate.getDay() !== 0) {
        range(1, leftMostDate.getDay() - 1).forEach((idx) => {
            const date = new Date(leftMostDate)
            date.setDate(date.getDate() - idx);
            daysArrayAdj.unshift(date)
        })
    }
    if (rightMostDate.getDay() !== 7) {
        console.log(range(rightMostDate.getDay(), 6))
        range(rightMostDate.getDay(), 6).reverse().forEach((idx) => {
            const date = new Date(rightMostDate)
            console.log(date)
            console.log(idx)
            date.setDate(date.getDate() + (7 - idx));
            daysArrayAdj.push(date)
        })
    }

    return daysArrayAdj
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

    const date = new Date(startDate.getTime())
    const dates = []
    while (date < endDate) { // <=
        dates.push(new Date(date))
        date.setDate(date.getDate() + 1)
    }

    return dates
}