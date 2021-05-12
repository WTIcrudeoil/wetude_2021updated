const fakeUser ={
    username:"Lee dong",
    loggedIn:true,
};

export const trending = (req,res) => {
    const videos = [
        {
            title:"First video",
            rating:5,
            comments:2,
            createdAt:"2 hour ago",
            views:59,
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
    res.render("home",{pageTitle:"Home",fakeUser,videos});
}
export const see = (req,res) => res.render("watch");
export const edit = (req,res) => res.render("edit");
export const search = (req,res) => res.send("Search");
export const upload = (req,res) => res.send("Upload");
export const deleteVideo = (req,res) => {
    console.log(req.params);
    return res.send("Delete Video");}


