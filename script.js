// 1. Map the keys to the audio files inside the 'piano-mp3' folder
const soundMapping = {
    'A': 'piano-mp3/A1.mp3',
    'B': 'piano-mp3/B1.mp3',
    'C': 'piano-mp3/C1.mp3',
    'D': 'piano-mp3/Bb2.mp3',
    'E': 'piano-mp3/C5.mp3',
    'F': 'piano-mp3/C7.mp3',
    'G': 'piano-mp3/D2.mp3',
    'H': 'piano-mp3/Db5.mp3',
    'I': 'piano-mp3/E2.mp3',
    'J': 'piano-mp3/E5.mp3',
    'K': 'piano-mp3/C2.mp3',
    'L': 'piano-mp3/F1.mp3',
    'M': 'piano-mp3/F3.mp3',
    'N': 'piano-mp3/G2.mp3',
    'O': 'piano-mp3/G5.mp3',
    'P': 'piano-mp3/Gb7.mp3',
    'Q': 'piano-mp3/D5.mp3',
    'R': 'piano-mp3/C7.mp3',
    'S': 'piano-mp3/E7.mp3',
    'T': 'piano-mp3/C7.mp3',
};

var keys=document.querySelectorAll('.keys')

function playSound(key) {
    // Get the file path from the list above
    const audioFile = soundMapping[key];

    // If a sound exists for this key, play it
    if (audioFile) {
        const audio = new Audio(audioFile);
        audio.currentTime = 0; // Rewind sound so you can press fast
        audio.play();

        animatekey(key);
    }
}
//Function to animate the keys when it pressed
function animatekey(key){
        keys.forEach(items=>{
        if(items.textContent===key){
            items.classList.add("active");
            setTimeout(() => {
                items.classList.remove("active")
            }, 150);
        }
    })
}
//Function to play piano by keybord key press
document.addEventListener('keydown', (event) => {
    // Get the key pressed and make it uppercase (a -> A)
    const letter = event.key.toUpperCase();
    playSound(letter);
});
//Function to play piano by mouse click on the buttons
keys.forEach(items=>{
    items.addEventListener('click',()=>{
        const letter =items.textContent;
        playSound(letter);
    })
})