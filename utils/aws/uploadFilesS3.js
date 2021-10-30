const AWS = require('aws-sdk')

AWS.config.update({
    accessKeyId: "AKIATG7SIEFI2SQTVN45",
    secretAccessKey:"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"
})
const s3 = new AWS.S3()


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

module.exports = {
    uploadFile
}