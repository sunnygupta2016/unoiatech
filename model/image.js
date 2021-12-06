const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        imageName: { type: String, default: "" },
        imagePath:{ type: String, default: "" },
        height: { type: String, default: "" },
        width: { type: String, default: ""  },
        size:{type:Number,default:0},
        extension: { type: String, default: "" },
        personName: { type: String, default: "" },
        location: { type: String, default: ""},
        latitude: { type: Number, default: 0 },
        longitude: { type: Number, default: 0 }, 
    },
    { timestamps: true }
);


const User = mongoose.model("User", UserSchema);

module.exports = User;