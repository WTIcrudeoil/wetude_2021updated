import express from "express";
import {watch, getEdit, postEdit,getUpload, deleteVideo, postUpload} from "../controllers/videoController"

const videoRouter = express.Router();

videoRouter.get("/upload",getUpload);
videoRouter.post("/upload",postUpload);
videoRouter.get("/:id(\\d+)",watch);// ":"" let express know this is a variable
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit)


videoRouter.get("/:id(\\d+)/delete",deleteVideo);

export default videoRouter;