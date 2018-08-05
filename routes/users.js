class Vehicle {
  constructor() {
  }
  static getCar() {
    console.log("vehicle");
  }

}
class Drone extends Vehicle {

  constructor() {
   super();

  }
  static getCar() {
    super.getCar();
    console.log("dron");
  }
}

drone = new Drone();
Drone.getCar();

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({"msisdn":95022881,"subscriptionDate":"2018-05-29 15:01:45.908","subscribed":true});
});

module.exports = router;
