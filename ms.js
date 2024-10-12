// MCU trailers
const videos = [
    'https://www.youtube.com/embed/KAE5ymVLmZg?si=oimcrLGCMy4Z0Dgk', 
    'https://www.youtube.com/embed/aV8H7kszXqo?si=ojDapESyEZmhIH83',
    'https://www.youtube.com/embed/RlOB3UALvrQ?si=M7BNO-PZa7eHXzsd',
    'https://www.youtube.com/embed/v7MGUNV8MxU?si=_LFd8ZzVKii-y0h-',
    'https://www.youtube.com/embed/6ZfuNTqbHE8?si=yvg9jksJYWVKCIOp',
    'https://www.youtube.com/embed/tmeOjFno6Do?si=VdzcdHSerhqxefW7',
    'https://www.youtube.com/embed/dKrVegVI0Us?si=E6Wqql47BE4WmMBx',
    'https://www.youtube.com/embed/rt-2cxAiPJk?si=StNOAYdNMUDIRVxe',
    'https://www.youtube.com/embed/TcMBFSGVi1c?si=ll7a4Ur-LbD9YtIQ'
];

// DC trailers
const dc_movies = [
    'https://www.youtube.com/embed/EcFghlzjEak?si=e-bGdW73NE-zzyiC',
    'https://www.youtube.com/embed/K9x2pGc_y9o?si=OPUaWvlbG3gXt2GJ',
    'https://www.youtube.com/embed/HGoU6KOA9ZI?si=_VG1C50WfeOlFMxm',
    'https://www.youtube.com/embed/Q3tochTgPVc?si=831kn-kgU5YkR4eB',
    'https://www.youtube.com/embed/MUyQlvdbANQ?si=mWZu3PQpr0iDO28_'
];

// Anime trailers
const anime_trailers = [
    'https://www.youtube.com/embed/E7WytLM2KvY?si=fkGPoPwcGu_x5v-_',
    'https://www.youtube.com/embed/j9sSzNmB5po?si=tQgobbWNfUySqweQ',
    'https://www.youtube.com/embed/Ph50sNkApVM?si=KKYiuN2ISaGx3gjp',
    'https://www.youtube.com/embed/QczGoCmX-pI?si=5vtHU0abFCHgRgVg',
    'https://www.youtube.com/embed/FHgm89hKpXU?si=jnf0am5JYVBeNcPK'
];


let currentVideoIndex = 0;
let currentPlaylist = videos; // Default playlist
const videoPlayer = document.querySelector("iframe");

// Function to update video based on current index
function updateVideo() {
    videoPlayer.src = currentPlaylist[currentVideoIndex];
}

// Next video function
function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % currentPlaylist.length;
    updateVideo();
}

// Previous video function
function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
    updateVideo();
}

//creating dc function

function updatePageTitle(title) {
   let pageTitle = document.getElementById("page-title");
   pageTitle.innerHTML = title;
    
}

// Switch playlist to DC trailers
function loadDC(evnt) {

    console.log("LoadDC function")
    // evnt.preventDefault();
    currentPlaylist = dc_movies;
    currentVideoIndex = 0; // Reset index
    updateVideo();
    updatePageTitle("DC Animated Movie Trailers! &#x1F525");   
}

// Switch playlist to Anime trailers
function loadAnime() {
    currentPlaylist = anime_trailers;
    currentVideoIndex = 0; // Reset index
    updateVideo();
    updatePageTitle("Anime Trailers")
}

function loadMCU() {
    currentPlaylist = videos;
    currentVideoIndex = 0; // Reset index
    updateVideo();
    updatePageTitle("Top 10 Highest Rated MCU Trailers of All Time!")
}

// Add event listeners for buttons
document.querySelector(".next-button").addEventListener("click", nextVideo);
document.querySelector(".back-button").addEventListener("click", prevVideo);

// Check if the selected option contains the letters "dc" and if so will change to that playlist
document.getElementById("select-id").addEventListener("change", function(event) {
    const selectedOption = event.target.value;
    if (selectedOption.includes("Dc")) {
        loadDC();
// Check if the selected option contains the letters "anime" and if so will change to that playlist 

    } else if (selectedOption.includes("Anime")) {
        loadAnime();
    } else {
        loadMCU();
    }
});

document.querySelector(".return-button").addEventListener("click", loadMCU);



