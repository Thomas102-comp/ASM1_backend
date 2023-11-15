var express = require('express');
var router = express.Router();

const { connectToDB, ObjectId } = require('../utils/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// /* Handle the Form */
// router.post('/api/bookings', async function (req, res) {
//   const db = await connectToDB();
//   try {
//     req.body.numTickets = parseInt(req.body.numTickets);
//     req.body.terms = req.body.terms == "on";
//     req.body.createdAt = new Date();
//     req.body.modifiedAt = new Date();

//     let result = await db.collection("bookings").insertOne(req.body);
//     res.status(201).json({ id: result.insertedId });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   } finally {
//     await db.client.close();
//   }
// });

/* Handle the volunteer Form */
router.post('/api/volunteer', async function (req, res) {
  const db = await connectToDB();
  try {

    let result = await db.collection("volunteer").insertOne(req.body);
    res.status(201).json({ id: result.insertedId });
  } catch (err) {
    res.status(400).json({ message: err.message });
  } finally {
    await db.client.close();
  }
});

/* Handle the new_event Form */
router.post('/api/new_event', async function (req, res) {
  const db = await connectToDB();
  try {

    let result = await db.collection("new_event").insertOne(req.body);
    res.status(201).json({ id: result.insertedId });
  } catch (err) {
    res.status(400).json({ message: err.message });
  } finally {
    await db.client.close();
  }
});

/* Handle the edit_event Form */
router.post('/api/edit_event', async function (req, res) {
  const db = await connectToDB();
  try {

    let result = await db.collection("edit_event").insertOne(req.body);
    res.status(201).json({ id: result.insertedId });
  } catch (err) {
    res.status(400).json({ message: err.message });
  } finally {
    await db.client.close();
  }
});











// /* Display all Bookings */
// router.get('/bookings', async function (req, res) {
//   const db = await connectToDB();
//   try {
//       let results = await db.collection("bookings").find().toArray();
//       res.render('bookings', { bookings: results });
//   } catch (err) {
//       res.status(400).json({ message: err.message });
//   } finally {
//       await db.client.close();
//   }
// });  





// /* Display a single Booking */
// router.get('/bookings/read/:id', async function (req, res) {
//   const db = await connectToDB();
//   try {
//     let result = await db.collection("bookings").findOne({ _id: new ObjectId(req.params.id) });
//     if (result) {
//       res.render('booking', { booking: result });
//     } else {
//       res.status(404).json({ message: "Booking not found" });
//     }
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   } finally {
//     await db.client.close();
//   }
// });

// // Delete a single Booking
// router.post('/bookings/delete/:id', async function (req, res) {
//   const db = await connectToDB();
//   try {
//     let result = await db.collection("bookings").deleteOne({ _id: new ObjectId(req.params.id) });
//     if (result.deletedCount > 0) {
//       res.status(200).json({ message: "Booking deleted" });
//     } else {
//       res.status(404).json({ message: "Booking not found" });
//     }
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   } finally {
//     await db.client.close();
//   }
// });

// // display the update form
// router.get('/bookings/update/:id', async function (req, res) {
//   const db = await connectToDB();
//   try {
//     let result = await db.collection("bookings").findOne({ _id: new ObjectId(req.params.id) });
//     if (result) {
//       res.render('update', { booking: result });
//     } else {
//       res.status(404).json({ message: "Booking not found" });
//     }
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   } finally {
//     await db.client.close();
//   }
// });

module.exports=router;


