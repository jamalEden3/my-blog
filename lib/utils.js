export const getFormattedDate = (mseconds) => {
    const formatOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    };

    const date = new Date(mseconds);
    return date.toLocaleDateString(undefined, formatOptions)
}