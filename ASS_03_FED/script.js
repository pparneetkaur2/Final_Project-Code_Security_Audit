//variables
let storyIndex = 0; 
const playerName = "Munchkin"; 
let spookyMessage = "Welcome to the Haunted Adventure "; 

//string literal
const welcomeLiteral = `Hello ${playerName}, you have entered the Haunted Forest...`;

//arrays
let storyEvents = [
    "You wake up in a dark forest. The wind whispers through the trees...",
    "You hear a strange voice calling your name from the shadows...",
    "You see an old, abandoned house. Do you dare to step inside?",
    "The forest behind you grows darker. Something is following you...",
    "You run deeper into the woods, your heart pounding with fear..."
];

//html manipulation
const header = document.getElementById("headerText");
header.textContent = welcomeLiteral;

const footer = document.getElementById("statusMessage");
footer.textContent = storyEvents[storyIndex];

//functions
function moveForward() {
    if (storyIndex < storyEvents.length - 1) {
        storyIndex++;
        footer.textContent = storyEvents[storyIndex];
    } else {
        footer.textContent = "Miracle!!You reached the end of your spooky journey...";
    }
}

function stepBack() {
    if (storyIndex > 0) {
        storyIndex--;
        footer.textContent = storyEvents[storyIndex];
    } else {
        footer.textContent = "You are back at the beginning of the haunted forest...";
    }
}

//event listeners
document.getElementById("forwardButton").addEventListener("click", moveForward);
document.getElementById("backButton").addEventListener("click", stepBack);