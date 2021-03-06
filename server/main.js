import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = '4567';

app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json());

app.post('/payload', (req,res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`);
});