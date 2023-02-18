let videolist = document.querySelectorAll('.list_of_videos .vide');
let activevideo = document.querySelector('.active_video video');
let videotitle = document.querySelector('.active_video .videotitle');

videolist.forEach(video=>{
    video.onclick = () =>{
        videolist.forEach(vide => vide.classList.remove('active'));
    video.classList.add('active');
   
    if(video.classList.contains('active')){
        let src = video.children[0].getAttribute('src');
        activevideo.src = src;
        let text = video.children[1].innerHTML;
        videotitle.innerHTML= text;
    };
};
});