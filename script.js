const textInput = document.getElementById("textInput");
const voiceSelect = document.getElementById("voiceSelect");
const rate = document.getElementById("rate");
const pitch = document.getElementById("pitch");

let synth = window.speechSynthesis;
let voices = [];

// Load available voices
function loadVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = "";
    
    voices.forEach(voice => {
        const option = document.createElement("option");
        option.textContent = `${voice.name} (${voice.lang})`;
        option.value = voice.name;
        voiceSelect.appendChild(option);
    });
}

// Speak the text
function speakText() {
    if (!textInput.value) return;
    
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    utterance.voice = voices.find(voice => voice.name === voiceSelect.value);
    utterance.rate = rate.value;
    utterance.pitch = pitch.value;
    
    synth.speak(utterance);
}

// Load voices when ready
synth.onvoiceschanged = loadVoices;
loadVoices();
