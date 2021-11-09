var AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: "AKIATG7SIEFI3KJFUMFF",
    secretAccessKey:"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",
    region: "us-east-2"
})
//AWS.config.update({accessKeyId: 'mykey', secretAccessKey: 'mysecret', region: 'myregion'});
var s3 = new AWS.S3();

var bucketParams = {
    Bucket : 'principallll',
  };


  
  // Call S3 to obtain a list of the objects in the bucket
  s3.listObjects(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });