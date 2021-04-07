const convertParsedDataToLetter = (parsed) => {
    const title = parsed.subject;
    const content = parsed.text;
    const date = parsed.date;
    const newsletter = parsed.from.text.split(' <')[0];
    const username = parsed.to.text.split('@')[0];
    let imgUrl;

    if (title && content && newsletter) {
        return {
            title,
            content,
            date,
            newsletter,
            username,
            image: imgUrl,
        };
    } else {
        return;
    }
};

module.exports = {
    convertParsedDataToLetter,
};
