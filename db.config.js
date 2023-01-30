const AWS = require('aws-sdk');

AWS.config.update({
    region: "Your_Region",
    accessKeyId: "Your_Access_Key",
    secretAccessKey: "Your_Secret_Access_Key"
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'users'

module.exports = {
    db,
    Table
}
