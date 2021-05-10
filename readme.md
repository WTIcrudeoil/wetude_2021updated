# Wetube Reloaded

어떠한 형태의 데이터를 다룰 것인지를 먼저 고려해야함
이 프로젝트에서는 유저와 비디오가 메인이 될것이다.

Router를 통해서 URL을 그룹화 하여 진행한다.
/ -> Home
/join -> join
/login -> Login
/search -> Search


/users/:id -> See user
/users/logout -> Log Out
/users/edit -> Edit My profile
/users/delete -> Delete My profile

/videos/:id -> Watch Video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video

/videos/comments -> Comment on a video
/videos/comments/delete -> Delete A Comment of a Video