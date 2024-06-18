var mongoose= require("mongoose");

const stuSchema=new mongoose.Schema({
    rollno:String,
    name:String,
    city:String,
    fees:String,
});

module.exports= mongoose.model("student", stuSchema);


