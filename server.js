const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.status(200).send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    var data=req.body;
    var firstNumber=data.first;
    var secondNumber=data.second;
    var result=firstNumber+secondNumber;
    res.status(200).send({result: `${result}`})
});


baseRouter.post('/subtract', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    var data=req.body;
    var firstNumber=data.first;
    var secondNumber=data.second;
    var result=firstNumber-secondNumber;
    res.status(200).send({result: `${result}`})
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});