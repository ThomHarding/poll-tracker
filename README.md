
| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo|        2 |

| Events                                                                               |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On load, see a form and empty current poll div                                             |        2 |
| On submit, add the poll options and question to the current poll div                                      |        2 |
| On clicking add or subtract, increment and decrement the correct poll votes in the current poll div|     2 |
| On clicking finish, empty the current poll div and add the current poll to the "past polls" div. All past polls should be visible in this div by looping through and calling `renderPoll` with each poll. |4|

| Functions                                                              |             |
| :----------------------------------------------------------------------------------- | ----------: |
| IMPURE: `displayCurrentPoll()` : mutates DOM to display current state of current poll | 2|
| IMPURE: `displayAllPolls()` : clears out DOM and appends to poll div using current state of past polls | 3 |
| PURE: `renderPoll(poll)` : returns DOM node | 3|


## Stretch goal ideas
- Add a dropdown to let the user select how many "options" the poll should have. For example, "What is your favorite color?" might have "red", "orange", or "green".
- Allow the user to click on and delete past polls
- Allow the user to go back and update past polls using the UX of your choice.

## HTML Setup
6 buttons
- option A add button
  - Why? 💥💥💥 Add event listener to increment the vote count for option A in the current poll
- option B add button
  - Why? 💥💥💥 Add event listener to increment the vote count for option B in the current poll
- option A subtract/undo button
  - Why? 💥💥💥 Add event listener to decrement the vote count for option A in the current poll
- option B subtract/undo buttons
  - Why? 💥💥💥 Add event listener to decrement the vote count for option B in the current poll
- create poll form
  - Why? Add 'submit' listener to (not a click listener) to the form itself!
  - three inputs (question, option 1, option 2)
    - Why? Figure out the user's question and options
    - Why? 💥💥💥 On submit, update the current poll question and options, and reflect that in the DOM
- 1 'close poll' button
  - Why?
    - 💥💥💥 
    - Append the current poll to the past polls state []
    - "Update the list"
      - clear DOM of the list
      - Use a for loop to loop through all past polls, create some DOM and display each past poll in the list
    - Clear out/reset current poll state and DOM.
- current poll section
  - Why? a bunch of empty divs that we will inject state into (question, options, and vote totals)
- empty div for closed polls history/list (for appending to)
  - Why? A place to put the histry

