const config = require('./config/config');
const SMTPServer = require('smtp-server').SMTPServer;
const simpleParser = require('mailparser').simpleParser;
const fetch = require('node-fetch');

const letterService = require('./services/letterService');

const server = new SMTPServer({
    onData(stream, session, callback) {
        console.log('Data accepted');

        simpleParser(stream, {}, (err, parsed) => {
            if (err) {
                console.log(err);
            }

            const letter = letterService.convertParsedDataToLetter(parsed);

            fetch(`${config.serverAddress}/news/add`, {
                method: 'POST',
                body: JSON.stringify(letter),
                headers: { 'Content-Type': 'application/json' },
            })
                .then((res) => res.json())
                .then((json) => console.log(json))
                .catch((err) => {
                    console.log(err);
                });
        });
        stream.on('end', () => {
            callback(null, 'Message accepted');
        });
    },
    disabledCommands: ['AUTH'],
});

server.listen(config.port, () => console.log(`SMTP server is up and running on port ${config.port}...`));

server.on('error', (err) => {
    console.log('Error %s', err.message);
});
