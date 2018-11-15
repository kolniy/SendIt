import express from 'express';
const router = express.Router();

import Parcels from '../controlers/parcels';

/* GET list of all parcels */
router.get('/parcels', Parcels.GetAllParcels);

// api to create new parcels
router.post('/parcels', Parcels.CreateNewParcel);

//Api to get specific parcel delivery order
router.get('/parcels/:parcelid', Parcels.GetSpecificParcel);

// api to get all parcels by specific user
router.get('/:userid/parcels/', Parcels.ParcelSpecificUsr);

//Api to cancel specific parcel order by id
router.put('/:parcelid/cancel', Parcels.CancelParcel);

export default router;