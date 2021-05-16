import Video from "../models/Video";


export const home = async (req,res) => {
    try{
        const videos = await Video.find({})
        res.render("home",{pageTitle:"Home",videos});
    } catch {
        return res.render("server-error")
    }    
}
export const watch = (req,res) => {
    const { id } = req.params;
 
    res.render("watch",{pageTitle:`Watching ${video.title}`});
}
export const getEdit = (req,res) => {
    const { id } = req.params;
    
    res.render("edit",{pageTitle:`Editing: ${video.title}`});
};
export const postEdit =(req,res) =>{
    const { id } = req.params;
    const { title }= req.body;
    return res.redirect(`/videos/${id}`);
}
export const getUpload = (req,res) =>{
    return res.render("upload",{pageTitle:`Upload video`,videos});
};
export const postUpload = (req,res) =>{
    //here we will add a video to the videos array.
    const {title} =req.body
    
    return res.redirect("/");
}


export const search = (req,res) => res.send("Search");
export const upload = (req,res) => res.send("Upload");
export const deleteVideo = (req,res) => {
    console.log(req.params);
    return res.send("Delete Video");}


