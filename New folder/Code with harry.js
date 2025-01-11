// window.addEventListener("scroll", function(){
//     console.log("scroll")
// })


// Initialaze the variables
let songIndex = 0;
let audioElement = new Audio("song/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let masterPlaySong = document.getElementById("masterPlaySong")
let songIteams = Array.from(document.getElementsByClassName("songIteams"));
// let songIteamPlay = Array.from(document.getElementsByClassName("songIteamPlay"));


let songs = [
    {songName : "Let me Love you..!", filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName : "I-want you-here...", filePath: "song/2.mp3", coverPath: "cover/2.jpg"},
    {songName : "a-d-vsalam-e-isq", filePath: "song/3.mp3", coverPath: "cover/3.jpg"},
    {songName : "Sari umreham-.d.." , filePath: "song/4.mp3", coverPath: "cover/4.jpg"},
    {songName : "salam-e-isq-ads..", filePath: "song/5.mp3", coverPath: "cover/5.jpg"},
    {songName : "salam-f-ad- fff...", filePath: "song/6.mp3", coverPath: "cover/6.jpg"},
    {songName : "salam-e-isqsdfsf", filePath: "song/7.mp3", coverPath: "cover/7.jpg"},
    {songName : "salam-e-isq-dfsd", filePath: "song/8.mp3", coverPath: "cover/8.jpg"},

];

songIteams.forEach((element, i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// Handle play/puse
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime < 0){
        audioElement.play()
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle")
        gif.style.opacity = 0;
    }
});

// Listen to events
audioElement.addEventListener("timeupdate", function(){
    // Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

});

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = ((myProgressBar.value*audioElement.duration)/100);

});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songIteamPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
        masterPlaySong.innerText = songs[songIndex].songName;
    })
};

Array.from(document.getElementsByClassName("songIteamPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makeAllPlays()
        masterPlaySong.innerText = songs[songIndex].songName;
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `song/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
        
    })
});


document.getElementById("next").addEventListener("click", ()=>{
    if (songIndex>7){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    masterPlaySong.innerText = songs[songIndex].songName;
    audioElement.src = `song/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle")
})


document.getElementById("back").addEventListener("click", ()=>{
    if (songIndex<0){
        songIndex = 7;
    }else{
        songIndex ++;
    }
    masterPlaySong.innerText = songs[songIndex].songName;
    audioElement.src = `song/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle")
})