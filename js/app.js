// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables */
var synth = window.speechSynthesis;
var textToSpeak = '';
var story = document.getElementById('story');
var audio = document.getElementById('audio');
var subjectButton = document.getElementById('subjectButton');
var verbButton = document.getElementById('verbButton');
var adjectiveButton = document.getElementById('adjectiveButton');
var nounButton = document.getElementById('nounButton');
var placeButton = document.getElementById('placeButton');
var generateButton = document.getElementById('generateButton');
var speakButton = document.getElementById('speakButton');
var resetButton = document.getElementById('resetButton');

/* Arrays */
var subjects = ['The cat', 'The dog', 'The cow', 'The bird', 'The rabbit'];
var verbs = ['ate', 'jumped over', 'slept on', 'chased', 'ran from'];
var adjectives = ['a big', 'a small', 'a funny', 'a lazy', 'a smart'];
var nouns = ['ball', 'tree', 'house', 'car', 'flower'];
var places = ['the park', 'the beach', 'the zoo', 'the mountains', 'the city'];

/* Functions */
function getRandomElement(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generateStory() {
    var subject = getRandomElement(subjects);
    var verb = getRandomElement(verbs);
    var adjective = getRandomElement(adjectives);
    var noun = getRandomElement(nouns);
    var place = getRandomElement(places);

    textToSpeak = `${subject} ${verb} ${adjective} ${noun} in ${place}.`;
    story.textContent = textToSpeak;
    resetButton.style.display = 'inline-block';
}

function speakNow() {
    var utterThis = new SpeechSynthesisUtterance(textToSpeak);
    synth.speak(utterThis);
}

function resetStory() {
    textToSpeak = '';
    story.textContent = '';
    audio.pause();
    audio.currentTime = 0;
    resetButton.style.display = 'none';
}

function highlightWord(button, word) {
    textToSpeak += word + ' ';
    button.classList.add('highlight');
    setTimeout(function() {
        button.classList.remove('highlight');
    }, 1000);
}

/* Event Listeners */
subjectButton.addEventListener('click', function() {
    var word = getRandomElement(subjects);
    highlightWord(subjectButton, word);
});

verbButton.addEventListener('click', function() {
    var word = getRandomElement(verbs);
    highlightWord(verbButton, word);
});

adjectiveButton.addEventListener('click', function() {
    var word = getRandomElement(adjectives);
    highlightWord(adjectiveButton, word);
});

nounButton.addEventListener('click', function() {
    var word = getRandomElement(nouns);
    highlightWord(nounButton, word);
});

placeButton.addEventListener('click', function() {
    var word = getRandomElement(places);
    highlightWord(placeButton, word);
});

generateButton.addEventListener('click', generateStory);
speakButton.addEventListener('click', speakNow);
resetButton.addEventListener('click', resetStory);
