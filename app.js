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
    currentQuestion = data.get('poll=title-input');
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
    pastPolls.push(renderPoll(pollObject));
    inputForm.reset();
    displayAllPolls();
    currentPollDiv.innerHTML = '';
});

function displayCurrentPoll() {
  //display state of current poll to current poll div
}

function displayAllPolls() {
    pastPollDiv.innerHTML = '';
    for (let poll of pastPolls) {
        let renderedPoll = renderPoll(poll);
        pastPollDiv.appendChild(renderedPoll);
    }
}

function renderPoll(poll) {
    return Node;
    //return dom node containing poll information to be displayed
    //one node for the title of the poll
    //two nodes, one for a and b
      //each has children of a title and a number of votes in its own node
}
