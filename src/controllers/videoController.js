import Video from "../models/Video";



export const home = async (req,res) => {
    try{
        const videos = await Video.find({})
        res.render("home",{pageTitle:"Home",videos});
    } catch {
        return res.render("server-error")
    }    
}
export const watch = async (req,res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if(video===null){
        return res.render("404",{pageTitle:"Video not found."})
    }
    return res.render("watch",{pageTitle:video.title,video});
}
export const getEdit = async (req,res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if(!video){
        return res.render("404",{pageTitle:"Video not found."})
    }
    return res.render("edit",{pageTitle:`Edit: ${video.title}`,video});
};
export const postEdit =async(req,res) =>{
    const { id } = req.params;
    const {title,description,hashtags} = req.body;
    const video = await Video.exists({_id:id});
    
    if(!video){
        return res.render("404",{pageTitle:"Video not found."})
    }
    await Video.findByIdAndUpdate(id,{
        title,
        description,
        hashtags:Video.formatHashtags(hashtags),
    })
  
    return res.redirect(`/videos/${id}`);
}
export const getUpload = (req,res) =>{
    return res.render("upload",{pageTitle:`Upload video`});
};
export const postUpload = async (req,res) =>{
    //here we will add a video to the videos array.
    const {title, description, hashtags} =req.body;
    try{
        await Video.create({
            title,
            description,
            hashtags:Video.formatHashtags(hashtags),
         
        })
        return res.redirect("/");
    }catch(error){

        return res.render("upload",{pageTitle:`Upload video`,errorMessage:error._message});
    }
    
    
}


export const search = (req,res) => res.send("Search");
export const upload = (req,res) => res.send("Upload");
export const deleteVideo = (req,res) => {
    console.log(req.params);
    return res.send("Delete Video");}


