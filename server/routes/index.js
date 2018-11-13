
import express from 'express';
const router = express.Router();

router.get('/parcel', (req,res,next) => {
      res.redirect('/parcel');
});

export default router;