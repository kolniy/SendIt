import express from 'express';
import parcels_data from './data/parcels.js';

// set-up for express
const app = express();

// Api to get all the parcels
app.get('api/v1/parcels', (req, res) => {

});

// Api to create new parcels
app.post('api/v1/parcels', (req, res) => {
    
});

//Api to get specific parcel delivery order
app.get('api/v1/parcels/2', (req, res) => {

});

//Api to get all parcel by specific user
app.get('api/v1/2/parcels/', (req, res) => {

});

//Api to cancel specific parcel order by id
app.get('api/v1/2/cancel', (req, res) => {
 
});