//make video model
// we have to tell monogoose how does our data look like

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: String,
    description : String,
    createdAt : Date,
    hashtags:[{type:String}],
    meta:{
        views:Number,
        rating:Number,
    },
})

const videos = mongoose.model("Video",videoSchema);
export default videos;