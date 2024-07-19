module.exports = {
    format_date: (date) => {
        if (!date || !(date instanceof Date)) {
            throw new TypeError('Invalid date provided');
        }
        return date.toLocaleDateString();
    },
};