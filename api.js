var express = require('express'),
  app = express(),
  port = process.env.PORT || 3002;
app.listen(port);

app.get('/', async function (req, res) {
    console.log('request handled');
    res.set({
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.send('12.34.56.78');
});


console.log('API active on port: ' + port);