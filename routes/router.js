const express = require('express');
const router = express.Router();
const Appointment = require('../model/Appointment');
// Path is needed because vanilla html is being used so we need the path to direct this file to the file
const path = require('path');

router.post('/schedule_service', async(req, res) => {
    const {name, email, phone, date} = req.body

    try {
        const newAppointment = new Appointment({name, email, phone, date})
        await newAppointment.save()
        res.sendFile(path.join(__dirname, '../views/bookResult.html'))
    } catch (error) {
        console.log(error);
        res.sendFile(path.join(__dirname, '../views/bookError.html'))
    }
});

module.exports = router;