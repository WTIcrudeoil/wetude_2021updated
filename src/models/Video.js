//make video model
// we have to tell monogoose how does our data look like

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: String,
    description : String,
    createdAt : {type:Date, requried:true, default:Date.now},
    hashtags:[{type:String}],
    meta:{
        views:{type:Number, default:0, required:true},
        rating:{type:Number, default:0, required:true},
    },
})

const videos = mongoose.model("Video",videoSchema);
export default videos;