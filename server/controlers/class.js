class user{

    static createNewParcel(){
        return(req,res,next) => {

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
        }
    }

}