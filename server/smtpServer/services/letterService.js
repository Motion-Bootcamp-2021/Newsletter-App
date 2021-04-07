const convertParsedDataToLetter = (parsed) => {
    const title = parsed.subject;
    const content = parsed.text;
    const date = parsed.date;
    const newsletter = parsed.from.text.split(' <')[0];
    const username = parsed.to.text.split('@')[0];

    let initialImage = content.split('\n').filter((e) => e.startsWith('<http') || e.startsWith('http'))[0];
    let imgUrl;

    if (initialImage !== undefined) {
        let imageStartIndex = initialImage.indexOf('<');

        imageStartIndex = imageStartIndex == -1 ? 0 : imageStartIndex + 1;

        let imageEndIndex = initialImage.indexOf('>');

        if (imageEndIndex != -1) {
            imgUrl = initialImage.substring(imageStartIndex, imageEndIndex);
        } else {
            imgUrl = initialImage.substring(imageStartIndex);
        }
    }

    return {
        title,
        content,
        date,
        newsletter,
        username,
        image: imgUrl,
    };
};

module.exports = {
    convertParsedDataToLetter,
};
