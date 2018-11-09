import express from 'express';
import parcels_data from './data/parcel';
import bodyParser from 'body-parser';

// set-up for express
const app = express();

// parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Api to get all the parcels
app.get('/api/v1/parcels', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'parcel data sent succesfully',
        parcels : parcels_data
      })
});

// Api to create new parcels
app.post('/api/v1/parcels', (req, res) => {

    if(!req.body.name) {
        return res.status(400).send({
          success: 'false',
          message: 'name is required'
        });
      } else if(!req.body.pickupLocation) {
        return res.status(400).send({
          success: 'false',
          message: 'pick up location is required'
        });
      } else if(!req.body.destination){
          return res.status(400).send({
                success : 'false',
                message: "Destination is required"
          });
      }

    // as an example 
    const newParcel = {
        id : parcels_data.length + 1,
        name : req.body.name,
        description : req.body.description,
        destination : req.body.destination,
        pickupLocation : req.body.pickupLocation,
        status : req.body.status,
        createdBy : 4
    }

    parcels_data.push(newParcel);
    return res.status(201).send({
        success : 'True',
        message : 'Parcel Created succesfully'
    })
  
});

//Api to get specific parcel delivery order
app.get('/api/v1/parcels/:id', (req, res) => {

    const id = parseInt(req.params.id, 10);
    parcels_data.map((parcel) => {
        if (parcel.parcel_id === id){
            return res.status(200).send({
                success : 'True',
                message : 'Parcel recieved succesfully',
                parcel,
            });
        }
    });

    return res.status(404).send({
        success: 'false',
        message: 'parcel does not exist',
      });

});

//Api to get all parcel by specific user
app.get('/api/v1/:userid/parcels/', (req, res) => {
     const user_id = parseInt(req.params.userid, 10);

     let parcels = [];

      parcels_data.map((parcel) => {
        if(parcel.createdBy === user_id){
            parcels.push(parcel);
            return res.status(200).send({
                success : 'True',
                message : 'Parcel specific to user',
                parcels
            });
        }
   });

   return res.status(404).send({
    success: 'false',
    message: 'User Not found',
  });

});

//Api to cancel specific parcel order by id
app.put('/api/v1/:parcelid/cancel', (req, res) => {
    const id = parseInt(req.params.parcelid, 10);

    parcels_data.map((parcel, index) => {
        if (parcel.parcel_id === id) {
           parcels_data.splice(index, 1);
           return res.status(200).send({
             success: 'true',
             message: 'Parcel canceled successfuly',
           });
        }
      });
    
    
        return res.status(404).send({
          success: 'false',
          message: 'Parcel not found',
        });
});

const PORT = 3500;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});