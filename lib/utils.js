export const getFormattedDate = (mseconds) => {
    const formatOptions = {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        timeZone: 'UTC',
    };

    const date = new Date(mseconds);
    return date.toLocaleDateString('en-US', formatOptions)
}