const AWS = require('aws-sdk')
// AWS.config.update({region: 'us-east-1'});

AWS.config.update({
    accessKeyId: "AKIATG7SIEFI3KJFUMFF",
    secretAccessKey:"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",
    region: "us-east-1"
})
const s3 = new AWS.S3()
var glacier = new AWS.Glacier({apiVersion: '2012-06-01'});


async function uploadFile(name, buffer, contentType){
    const params = {
        ACL: 'public-read',
        Body: buffer,
        Bucket: "practicauploadfiles",
        ContentType: contentType,
        Key: `${name}.png`
    }
    let data = await  s3.upload(params).promise()
    return data
}

async function uploadS3Glacier(buffer){
    var params = {vaultName: 'test', body: buffer};
    // Call Glacier to upload the archive.
    glacier.uploadArchive(params, function(err, data) {
      if (err) {
        console.log("Error uploading archive!", err);
      } else {
        console.log(data)
        console.log("Archive ID", data.archiveId);
      }
    });
}

module.exports = {
    uploadFile,
    uploadS3Glacier
}