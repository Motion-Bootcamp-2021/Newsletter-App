const SMTPConnection = require('nodemailer/lib/smtp-connection');
const MailComposer = require('nodemailer/lib/mail-composer');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

let connection = new SMTPConnection({
    host: 'localhost',
    port: 25,
    secure: false,
});

connection.connect(function () {
    console.log('Connceted to SMTP server');

    let mail = new MailComposer({
        from: 'Morning Brew <crew@bbc.com>',
        to: 'test@gmail.com',
        subject: 'Test za bbc',
        text: `There Might Be a Hole in the Ark\n<https://prod.static9.net.au/_/media/2020/01/20/10/13/brisbane-9-news-meet-the-team.jpg>
        `,
    });
    let stream = mail.compile().createReadStream();

    // mail.compile().build(function(err, message){
    //     process.stdout.write(message);
    // });

    const envelope = {
        from: 'testapp@testapplocal.com',
        to: 'mahantp19@gmail.com',
    };

    // const message = 'Test message1';

    connection.send(envelope, stream, function (err, info) {
        if (err) return console.log('Error : ' + err);

        console.log('Message sent');
        console.log('Accepted  : ' + info.accepted);
        console.log('Rejected  : ' + info.rejected);
        console.log(info.response);

        connection.quit();
        console.log('Quit connection');
        connection.close();
    });
});
