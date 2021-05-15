const fakeUser ={
    username:"Lee dong",
    loggedIn:true,
};
let videos = [
    {
        title:"First video",
        rating:5,
        comments:2,
        createdAt:"2 hour ago",
        views:1,
        id:1,
    },
    {
        title:"Second video",
        rating:5,
        comments:19,
        createdAt:"2 hour ago",
        views:19,
        id:2,
    },
    {
        title:"3 video",
        rating:3.5,
        comments:12,
        createdAt:"2 hour ago",
        views:9,
        id:3,
    },
];
export const trending = (req,res) => {
    res.render("home",{pageTitle:"Home",fakeUser,videos});
}
export const watch = (req,res) => {
    const { id } = req.params;
    const video = videos[id-1]
    res.render("watch",{pageTitle:`Watching ${video.title}`,fakeUser,video});
}
export const getEdit = (req,res) => {
    const { id } = req.params;
    const video = videos[id-1]
    res.render("edit",{pageTitle:`Editing: ${video.title}`,fakeUser,video});
};
export const postEdit =(req,res) =>{
    const { id } = req.params;
    const { title }= req.body;
    return res.redirect(`/videos/${id}`);
}
export const getUpload = (req,res) =>{
    return res.render("upload",{pageTitle:`Upload video`,fakeUser,videos});
};
export const postUpload = (req,res) =>{
    //here we will add a video to the videos array.
    const {title} =req.body
    const newVideo ={
        title,
        rating:0,
        comments:0,
        createdAt:"just now",
        views:0,
        id:videos.length +1,
    }
    videos.push(newVideo)
    return res.redirect("/");
}


export const search = (req,res) => res.send("Search");
export const upload = (req,res) => res.send("Upload");
export const deleteVideo = (req,res) => {
    console.log(req.params);
    return res.send("Delete Video");}


