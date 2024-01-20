//var randomizer = document.getElementById("rand");

// used to get the id elements and apply functionalities to them
var artwork = document.getElementById("dma");
var desc = document.getElementById("info");
var div = document.getElementById("hide");

// used to access a random digital media artwork
let randomInt = 0;

// a list of image sources
let artworks = [
    "assets/blueforeststatue.png",
    "assets/DreamdowsVR.gif",
    "assets/CreativeEyeofGraphics.gif",
    "assets/panda-ascii-art.png",
    "assets/KnowledgeableBearWarrior.png",
    "assets/panda-glitch-art.webp"
];

// an array of objects describing the digital media artworks
let artworkDescription = [
    {
        title: "Blue Forest",
        description: "Final Project for ACM 215. A blue forest with blue-green grass, a statue, a couple of shrines, and a few cherry trees.",
        source: "Unreal (used premade assets), Photoshop (changed the foliage color to blue)"
    },
    {
        title: "DreamdowsVR",
        description: "Final Project for ICS 486. A virtual artwork inspired by Windows XP.",
        source: "Unity VR"
    },
    {
        title: "Creative Eye of Graphics",
        description: "Final Project for ART 74 (Intro to Digital Media Art). Whenever the user clicks on the canvas, colorful ovals are generated around the eye.",
        source: "p5.js"
    },
    {
        title: "Panda ASCII Art",
        description: "Generated ASCII Art of a Panda.",
        source: "https://www.asciiart.eu/image-to-ascii"
    },
    {
        title: "Knowledgeable Bear Warrior",
        description: "Third Project for ART 74 (Intro to Digital Media Art). A bronze bear that wields a minecraft sword and a math textbook-shield.",
        source: "MeshMixer (to model the bear), Google Poly (used three premade assets)"
    },
    {
        title: "Panda Glitch Art",
        description: "JPG glitch art of a panda. I made this for the PANDA club.",
        source: "Notepad++/TextEdit, Google Images"
    }
];

// digital media artwork info upon start
desc.innerHTML = `<b>Title:</b> ${artworkDescription[5].title}<br><br>
                  <b>Description:</b> ${artworkDescription[5].description}<br><br>
                  <b>Source:</b> ${artworkDescription[5].source}<br><br>`;

//randomizer.addEventListener("click", changeArtwork); 

function changeArtwork() {
    // need floor function to "convert" float to int
    // multiplied by artworks.length to make the range go from 0 to artworks.length - 1
    randomInt = Math.floor(Math.random() * artworks.length);
    artwork.src = artworks[randomInt];

    // while innerText renders '\n', it does not render HTML tags such as <b> and <br>
    desc.innerHTML = `<b>Title:</b> ${artworkDescription[randomInt].title}<br><br>
                      <b>Description:</b> ${artworkDescription[randomInt].description}<br><br>
                      <b>Source:</b> ${artworkDescription[randomInt].source}<br><br>`;
}

// let JS know the display of the div is set to none (otherwise, you may have to click twice for the first time)
div.style.display = "none";
// console.log(div.style.display);

function showDiv() {
    // used || to check if display is empty ('') despite it being defined as none in style.css
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

// for (var a in artworks) {
//     console.log(artworks[a]);
// }
