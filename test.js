var TeleSignSDK = require('telesignsdk');

const customerId = "6D30E7A8-D40B-4652-8A33-A90A1F97F11B";
const apiKey = "k3Jkr+UJe6ZiddKOCbgMIa6SZ+4LqoUI4AuAgLMCN59VgcCGxDCKF6zjBCi3nrbO+HSshEqpiGboY+lbSFi1Ow==";
const rest_endpoint = "https://rest-api.telesign.com";
const timeout = 10*1000; // 10 secs

const client = new TeleSignSDK( customerId,
    apiKey,
    rest_endpoint,
    timeout // optional
    // userAgent
);

const phoneNumber = "919003303579";
const message = "You're scheduled for a dentist appointment at 2:30PM.";
const messageType = "ARN";

console.log("## MessagingClient.message ##");

function messageCallback(error, responseBody) {
    if (error === null) {
        console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
            ` => code: ${responseBody['status']['code']}` +
            `, description: ${responseBody['status']['description']}`);
    } else {
        console.error("Unable to send message. " + error);
    }
}
client.sms.message(messageCallback, phoneNumber, message, messageType);
