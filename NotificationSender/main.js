var https = require('https');

var options = {
    host: 'android.googleapis.com',
    port: 443,
    path: '/gcm/send/{ENDPOINT}',
    method: 'POST',
    headers: {  'TTL' : '60',
    'Content-Length' : '0',
    'Authorization' : 'key=AAAAVI0FpWQ:APA91bGyHQ-G1DxpJ6-dqQ7gU8VqtjjBEF4WoIplXLPb5VaNrOfvuSqFEaTwLem5AcAs1pVwF5Mttde8zWUuzI7r37i5TwlPQV5NlgYKcpN4DIkgxnl9_qGGwzjWEUFlw762fJ6-Sh2k'
}
  };

var req = https.request(options, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);

    res.on('data', function(d) {
        process.stdout.write(d);
    });
});

req.end();