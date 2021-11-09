var AWS = require("aws-sdk");
var s3 = new AWS.S3({
    accessKeyId: "AKIATG7SIEFIYOFDXTOT",
    secretAccessKey: "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",
    region: "us-east-2"
});
var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10', region: "us-east-2" });
var params = {
    TableName: 'MODULES',
    Item: {
        'name': { S: 'file.png' }
    }
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});