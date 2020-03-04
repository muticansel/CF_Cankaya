export const dayFinder = (dayIndex) => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();

    const dayToday = new Date(Date.now()).getDay();
    const dayDifference = dayIndex !== 0 ? dayIndex - dayToday : 7 - dayToday;

    const dayOfMonth = String(new Date().getDate()).padStart(2, '0')

    return new Date(year, month, parseInt(dayOfMonth) + dayDifference);
}