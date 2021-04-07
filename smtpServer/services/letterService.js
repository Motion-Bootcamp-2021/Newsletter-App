const convertParsedDataToLetter = (parsed) => {
    const title = parsed.subject;
    const content = parsed.text;
    const date = parsed.date;
    const newsletter = parsed.from.text.split(' <')[0];

    return {
        title,
        content,
        date,
        newsletter,
    };
};

module.exports = {
    convertParsedDataToLetter,
};
