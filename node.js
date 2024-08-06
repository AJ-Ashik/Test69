const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*', // Or specify your allowed domains
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Your routes here
