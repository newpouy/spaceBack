var mongoose = require('mongoose');

/**
 * User 정보를 담기 위한 Mongo DB model
 * @name userModel
 */
var reservModel = function () {

  var reservSchema = mongoose.Schema({
//    resevDate: { type: Date },
//    startTime: String,
//    EndTime: String,
    username: String,
    roomNum: String,
//    payYN: String,
//    updateDate: { type: Date, default: Date.now }
  });


  return mongoose.model('Reserv', reservSchema);
};

module.exports = new reservModel();
