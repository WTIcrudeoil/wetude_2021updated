//make video model
// we have to tell monogoose how does our data look like

import mongoose from "mongoose";



const videoSchema = new mongoose.Schema({
    title: {type:String, required:true, trim:true, maxLength:80 },
    description : {type:String, required:true, trim:true , minLength:20},
    createdAt : {type:Date, requried:true, default:Date.now},
    hashtags:[{type:String, trim:true}],
    meta:{
        views:{type:Number, default:0, required:true},
        rating:{type:Number, default:0, required:true},
    },
})

videoSchema.static('formatHashtags',function(hashtags){
    return hashtags.split(",").map(word => word.startsWith("#") ? word : `#${word}`);
})

const videos = mongoose.model("Video",videoSchema);
export default videos;