export function getTodayDate() {
    const todayDate = new Date()

    return {
        month: todayDate.toLocaleString('en-GB', { month: 'long' }),
        year: todayDate.getFullYear()
    }
}