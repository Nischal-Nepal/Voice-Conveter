let speed = new SpeechSynthesisUtterance();

let voiceChge = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voiceChge = window.speechSynthesis.getVoices();
    speed.voice = voiceChge[0];

    voiceChge.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

voiceSelect.addEventListener("change", () => {
    speed.voice = voiceChge[voiceSelect.value];
});

let Btn = document.querySelector("button");
let textarea = document.querySelector("textarea");

Btn.addEventListener("click", () => {
     speed.text = textarea.value;
     window.speechSynthesis.speak(speed);
});