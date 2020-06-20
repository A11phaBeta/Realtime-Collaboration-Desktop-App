var express = require('express');
var app = express();

app.locals.pretty = true;
app.use(express.static('static'))

app.get('/login_check', (req, res)=>{
  res.send('');
})

app.listen(3000, () => console.log('connected, 3000'));
