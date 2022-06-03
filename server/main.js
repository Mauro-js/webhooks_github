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

app.get('/', (req,res) => {
    res.send(req);
});

app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`);
});