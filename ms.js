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


let currentVideoIndex = 0;

// Select the iframe using the tag name
var iframe = document.createElement('iframe');

        // Set attributes for the iframe
        iframe.src = "https://www.youtube.com/embed/KAE5ymVLmZg?si=oimcrLGCMy4Z0Dgk";
        iframe.width = "560px";
        iframe.height = "315px";
        iframe.title = "YouTube video player";

        
        // Optionally set styles
        iframe.style.border = "2px solid black";

        // Append the iframe to a container in the DOM
        let div = document.getElementById('vid-container')
        div.appendChild(iframe);
     
console.log("videoPlayer Id ", videoPlayer)

function updateVideo() {
    console.log("videoPlayer ", videoPlayer)

    

    // videoPlayer.src = videos[currentVideoIndex];
}

function nextVideo() {
    
    console.log("test");
    currentVideoIndex += 1 % videos.length;
    console.log(currentVideoIndex)
    updateVideo();
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updateVideo();
}

document.querySelector("next-button").addEventListener("click", nextVideo);
document.querySelector(".back-button").addEventListener("click", prevVideo);