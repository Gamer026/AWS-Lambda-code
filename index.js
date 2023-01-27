const express = require('express')
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const app = express()
const port = 3003;

const user = require('./routes.js');

app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.get('/hello', (req, res) => {
  let newId= newuser();
   res.status(200).json({ 'User Id created Successfully': { Id: newId } });
});

app.get('/',(req,res)=>{
  res.status(200).json('Node.js is running successfully')
})

app.get('/html', (req, res) => {
  res.render('index');
});


app.post('/newUser',(req,res)=>{
    const Id = req.body;
         res.status(200).json({userId:Id});
});

app.use('/api', user)

const newuser = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

if(process.env.ENVIRONMENT === 'production') {
  module.exports.handler = serverless(app);
}else {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}
