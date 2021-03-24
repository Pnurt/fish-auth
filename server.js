var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;
app.listen(port);

app.post('/api/v1/info/input', async function (req, res) {
    console.log('input request handled');
    res.set({
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Encoding': 'gzip',
        'X-Clacks-Overhead': 'GNU Terry Pratchett',
        'Server': 'PythonAnywhere'
    });
    res.json({"success": true, "message": "successfulLogin", "licenceType": "1m", "loginCount": 0, "licenceExpired": false, "licenceEndDate": 1911111111});
});

app.post('/api/v1/info/pingdata', async function (req, res) {
    console.log('pingdata request handled');
    res.set({
        'Content-Type': 'text/html; charset=utf-8',
        'Connection': 'keep-alive',
        'X-Clacks-Overhead': 'GNU Terry Pratchett',
        'Server': 'PythonAnywhere'
    });
    res.json('0');
});

app.post('/api/v1/info/ipaddress', async function (req, res) {
    console.log('ipaddress request handled');
    res.set({
        'Content-Type': 'text/html; charset=utf-8',
        'Connection': 'keep-alive',
        'X-Clacks-Overhead': 'GNU Terry Pratchett',
        'Server': 'PythonAnywhere'
    });
    res.json('0');
});

app.post('/api/v1/info/exit', async function (req, res) {
    console.log('exit request handled');
    res.set({
        'Content-Type': 'text/html; charset=utf-8',
        'Connection': 'keep-alive',
        'X-Clacks-Overhead': 'GNU Terry Pratchett',
        'Server': 'PythonAnywhere'
    });
    res.json('0');
});

console.log('API active on port: ' + port);