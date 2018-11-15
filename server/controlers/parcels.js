import express from 'express';
import bodyParser from 'body-parser';
import data from '../dummy-data/parcel';

// parse incoming request data
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

const Parcels =  {

    // controler
 GetAllParcels (req, res)  {
    res.status(200).send({
        success: 'true',
        message: 'parcel data sent succesfully',
        parcels : data
      })
    },

// Api to create new parcels
CreateNewParcel (req, res) {

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
        id : data.length + 1,
        name : req.body.name,
        description : req.body.description,
        destination : req.body.destination,
        pickupLocation : req.body.pickupLocation,
        status : req.body.status,
        createdBy : 4
    }

    data.push(newParcel);
    return res.status(201).send({
        success : 'True',
        message : 'Parcel Created succesfully'
    })
  
},

//Api to get specific parcel delivery order
GetSpecificParcel (req, res)  {

	 const id = parseInt(req.params.parcelid, 10);

	   data.map((parcel) => {
        if (parcel.parcel_id === id){
            return res.status(200).send({
                success : 'True',
                message : 'Parcel recieved succesfully',
                parcel,
            });
        }
    });

    return res.status(404).send({
    	succes : 'false',
    	message : 'parcel does not exist',
    });
},

//Api to get all parcel by specific user
ParcelSpecificUsr (req, res)  {
     const user_id = parseInt(req.params.userid, 10);

     let parcels = [];

      data.filter((parcel) => {
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

},

//Api to cancel specific parcel order by id
 CancelParcel ()  {
    const id = parseInt(req.params.parcelid, 10);

    data.map((parcel, index) => {
        if (parcel.parcel_id === id) {
            data.splice(index, 1);
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
    }

}

export default Parcels;