const AWS = require('aws-sdk');

AWS.config.update({
    region: "ap-south-1",
    accessKeyId: "AKIAXH6QNHO5AIIHYENC",
    secretAccessKey: "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"
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'users'

module.exports = {
    db,
    Table
}