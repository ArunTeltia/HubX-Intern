const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    Organisation: {
        type: String ,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Event:{
        type: String
    },
    Address:{
        type: String
    },
    City:{
        type: String
    },
    PostCode:{
        type: String
    },
    State:{
        type: String
    },
    Mobile:{
        type:Number
    },
    TimeZone:{
        type:String
    },
    DateOfEvent:{
        type: Date,
        default:Date.now
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = Events = mongoose.model('events',EventSchema);