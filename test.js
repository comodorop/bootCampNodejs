var AWS = require('aws-sdk');
const fs = require('fs');
const chalk = require('chalk');

var s3 = new AWS.S3({
    accessKeyId: "AKIATG7SIEFIYOFDXTOT",
    secretAccessKey: "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",
    region: "us-east-1"
});

// Downloading method
const downloadFileFromS3 = () => {
    const params = {
        Bucket: 'principallll', // pass your bucket name
        Key: 'code.png', // file will be saved as testBucket/contacts.csv
    };

    let file = fs.createWriteStream('./download/code.png');
    return new Promise((resolve, reject) => {
        s3.getObject(params).createReadStream()
            .on('end', () => {
                console.log(chalk.green("File successfully downloaded!"));
                return resolve();
            })
            .on('error', (error) => {
                return reject(chalk.red(error));
            }).pipe(file)
    });
};

// restoring Method
const restoreFromGlacier = () => {
    const params = {
        Bucket: 'principallll',
        Key: 'code.png',
        RestoreRequest: {
            Days: 7,
            GlacierJobParameters: {
                Tier: "Expedited"
            }
        }
    };
    s3.restoreObject(params, function (err, data) {
        if (err)
            console.log(err);  // error
        else {
            console.log(data)
            console.log(chalk.green("File restored successfully!"));
        }

    });
};

restoreFromGlacier();

downloadFileFromS3()