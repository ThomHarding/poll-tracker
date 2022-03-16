// import functions and grab DOM elements
let addToAButton = document.getElementById('option-a-add');
let undoAButton = document.getElementById('option-a-undo');
let addToBButton = document.getElementById('option-b-add');
let undoBButton = document.getElementById('option-b-undo');
let closePollButton = document.getElementById('close-poll');
let inputForm = document.querySelector('form');
let pollInput = document.getElementById('poll-title-input');
let optionAInput = document.getElementById('input-option-a');
let optionBInput = document.getElementById('input-option-b');
let currentPollTitle = document.getElementById('current-question');
let currentATitleDiv = document.getElementById('option-a-title');
let currentAVotes = document.getElementById('option-a-votes');
let currentBTitleDiv = document.getElementById('option-b-title');
let currentBVotes = document.getElementById('option-b-votes');
let currentPollDiv = document.getElementById('current-poll');
let pastPollDiv = document.getElementById('past-polls');

// let state
let currentQuestion;
let currentATitle;
let currentBTitle;
let aVotes = 0;
let bVotes = 0;
let pastPolls = [];

addToAButton.addEventListener('click', () => {
    aVotes++;
    displayCurrentPoll();
});

undoAButton.addEventListener('click', () => {
    aVotes--;
    displayCurrentPoll();
});

addToBButton.addEventListener('click', () => {
    bVotes++;
    displayCurrentPoll();
});

undoBButton.addEventListener('click', () => {
    bVotes--;
    displayCurrentPoll();
});

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(inputForm);
    currentQuestion = data.get('poll-title-input');
    currentATitle = data.get('input-option-a');
    currentBTitle = data.get('input-option-b');
    displayCurrentPoll();
});

closePollButton.addEventListener('click', () => {
    //update each global variable up there to what's actually in the input
    let pollObject = {
        question: currentQuestion,
        optionATitle: currentATitle,
        optionBTitle: currentBTitle,
        optionAVotes: aVotes,
        optionBVotes: bVotes,
    };
    //render current poll, push to pastpolls
    pastPolls.push(pollObject);
    inputForm.reset();
    displayAllPolls();
    resetCurrentPoll();
});

function resetCurrentPoll() {
    currentPollTitle.textContent = '';
    currentATitleDiv.textContent = '';
    currentAVotes.textContent = '';
    currentBTitleDiv.textContent = '';
    currentBVotes.textContent = '';
}

function displayCurrentPoll() {
  //display state of current poll to current poll div
    currentPollTitle.textContent = currentQuestion;
    currentATitleDiv.textContent = currentATitle;
    currentAVotes.textContent = currentBTitle;
    currentBTitleDiv.textContent = aVotes;
    currentBVotes.textContent = bVotes;
    
}

function displayAllPolls() {
    pastPollDiv.innerHTML = '';
    for (let poll of pastPolls) {
        let renderedPoll = renderPoll(poll);
        pastPollDiv.appendChild(renderedPoll);
    }
}

function renderPoll(poll) {
    let pollDiv = document.createElement('div');
    let titleDiv = document.createElement('div');
    titleDiv.textContent = poll.question;
    pollDiv.appendChild(titleDiv);
    let aDiv = document.createElement('div');
    let bDiv = document.createElement('div');
    let aTitle = document.createElement('div');
    aTitle.textContent = poll.optionATitle;
    let aVotes = document.createElement('div');
    aVotes.textContent = poll.optionAVotes;
    let bTitle = document.createElement('div');
    bTitle.textContent = poll.optionBTitle;
    let bVotes = document.createElement('div');
    bVotes.textContent = poll.optionBVotes;
    aDiv.appendChild(aTitle);
    aDiv.appendChild(aVotes);
    bDiv.appendChild(bTitle);
    bDiv.appendChild(bVotes);
    pollDiv.appendChild(aDiv);
    pollDiv.appendChild(bDiv);
    //console.log(pollDiv);
    return pollDiv;
    //one node for the title of the poll
    //two nodes, one for a and b
      //each has children of a title and a number of votes in its own node
}
