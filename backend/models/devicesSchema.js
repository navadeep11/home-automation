const mongoose = require("mongoose");

const devicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  state: {
    type: Number,
    required: true,
  }
 
});

module.exports = mongoose.model("devices", devicesSchema);
