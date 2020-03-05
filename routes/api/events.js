const express = require("express");
const router = express.Router();
const config = require("config");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Events = require("../../models/Events");

//@route Post api/events
//@desc  Register Event
//@acess Public
router.post(
  '/',
  [
    auth,
    [
      check("Organisation", "Name is required")
        .not()
        .isEmpty(),
      check("Email", "Please include a valid email").isEmail(),
      check("Event", "Include the valid name of Event ")
        .not() 
        .isEmpty(),
      check("Address", "Add Address"),
      check("City", "Add City")
        .not()
        .isEmpty(),
      check("PostCode", "Add PostCode")
        .not()
        .isEmpty(),
      check("State", "Add State")
        .not()
        .isEmpty(),
      check("Mobile", "Add Mobile")
        .not()
        .isEmpty(),
      check("TimeZone", "Add TimeZone")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      Organisation,
      Email,
      Event,
      Address,
      City,
      PostCode,
      State,
      Mobile,
      TimeZone,
      DateOfEvent
    } = req.body;

    try {
      let event = await Events.findOne({ Email });

      if (event) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Event is Registered For this Email" }] });
      }
      event = new Events({
        Organisation,
        Email,
        Event,
        Address,
        City,
        PostCode,
        State,
        Mobile,
        TimeZone,
        DateOfEvent
      });

      await event.save();
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
