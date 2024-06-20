const express = require("express");
const router = express.Router();
const devices = require("./models/devicesSchema")


//=============== Getting all devices ==============



router.get('/get', async (req, res) => {
    try {
        await devices.find({}).then((data) => {
            res.json(data)
        })
    } catch (err) {
        console.log(err)
    }
})


//=============== updating device state ==============


router.put('/update', async (req, res) => {
    let { id, state } = req.body
    console.log(id,state)
    await devices.findByIdAndUpdate(id,{state})
    
    
})



module.exports = router;