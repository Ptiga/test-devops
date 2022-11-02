const express = require('express')
const app = express()
const port = 5022

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Si tu vois ce message, tu as réussi !!\nEt en plus, il y a une MàJ !!!')
});

app.listen(port, '0.0.0.0', () => {
    console.log('Server app listening on port ' + port)
})