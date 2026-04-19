//variables
let storyIndex = 0; 
let playerName = prompt("Enter your name:"); 
let spookyMessage = "Welcome to the Haunted Adventure ";

const welcomeLiteral = `Hello ${playerName}, you have entered the Haunted Forest...`;

//arrays
let storyEvents = [
    "You wake up in a dark forest. The wind whispers through the trees...",
    "You hear a strange voice calling your name from the shadows...",
    "You see an old, abandoned house. Do you dare to step inside?",
    "The forest behind you grows darker. Something is following you...",
    "You run deeper into the woods, your heart pounding with fear..."
];

const header = document.getElementById("headerText");
const footer = document.getElementById("statusMessage");

header.innerHTML = welcomeLiteral;

console.log("User name entered:", playerName);

footer.innerHTML = storyEvents[storyIndex];

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
        footer.innerHTML = storyEvents[storyIndex];
    } else {
        footer.innerHTML = "You are back at the beginning of the haunted forest...";
    }
}

//event listeners
document.getElementById("forwardButton").addEventListener("click", moveForward);
document.getElementById("backButton").addEventListener("click", stepBack);