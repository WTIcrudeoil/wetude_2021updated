import express from "express";
import {see, edit, upload, deleteVideo} from "../controllers/videoController"

const videoRouter = express.Router();

videoRouter.get("/upload",upload)
videoRouter.get("/:id",see);// ":"" let express know this is a variable
videoRouter.get("/:id/edit",edit)
videoRouter.get("/:id/delete",deleteVideo)

export default videoRouter;