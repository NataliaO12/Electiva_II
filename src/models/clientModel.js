const mongoose = require('mongoose');
const clientSchema = mongoose.Schema({
  client_name: {
    type: String,
    require: true,
  },
  address: {
    type: Array,
    require: true,

    city: {
      type: String,
      require: true,
    },
    code_zip: {
      type: String,
      require: true,
    },
    geo: {
      type: Array,
      require: true,
      lat: {
        type: String,
        require: true,
      },
      long: {
        type: String,
        require: true,
      },
    },
  },

  contact: {
    type: String,
    require: true,

    email: {
      type: String,
      require: true,
    },
    cellphone: {
      type: String,
      require: true,
    },
  },
});
module.exports = mongoose.model('clientCollection', clientSchema);
