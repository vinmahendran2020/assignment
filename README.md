# Frontend Assignment
There are 2 frontend tasks described below.
Each of the task has a basic UI skeleton which is open for improvement/enhancement.

<details>
  <summary>Task 1</summary>
  
  ## Simple 4x4 Grid Game
`npm i` and then `npm start`, go t0 `http://localhost:3000`, you will see below UI for Task 1 tab


[![N|Solid](./task_1.png)]

## Tasks

- User should be able to click on any box from the grid,
- Clicked box should become of color red and box should also display the `Box ${click_number}`,
- At any given point only 2 boxes (most recently clicked) should be in red color, all previously clicked boxes should turn blue,
- Once a box is clicked , user should not be able to click on it again.

</details>

<details>
  <summary>Task 2</summary>
  
  ## Phone Book
`npm i` and then `npm start`, go t0 `http://localhost:3000`, you will see below UI for Task 2 tab


[![N|Solid](./task_2.png)]

## Tasks

- Allow user to add entries to phonebook and display in table below,
- Alert error when duplicate first and last name,
- Add ability to remove records from the phone book

</details>

## Criteria

- Cleanliness of the code
- Use modern ES6+ syntax, async/await, elegant & readable code
- All the edgecases have been handled
- Tests are not needed but will be a big plus
- README.md file explaining your high level solution and any decisions you made and the reasons behind them


## How to submit

- Clone this repository in your local machine,
- Complete the task and upload to github,
- Share your public repo link with us.

## Solution

### Task 2

1) Created a Context object with following default values
  a) phoneBook as Map
  b) updatePhoneBook function
  c) deletePhoneBook function
2) Created a Provider and initialized with values
3) ContextProvider tag is added as parent for PhoneBookForm & InformationTable
4) Used useContext hook in PhoneBookForm child component to updatePhoneBook
5) Used useContext hook in InformationTable child component to get phoneBook state & deletePhoneBook
6) Login of updatePhoneBook function as follows
    - this function gets firstName + lastName as key
    - it gets phone number as value
    - checks the key already exists in the map
    - if not add the key & value to map
    - if yes show alert
7) Login of deletePhoneBook function as follows
    - When user clicks the delete button, the ID attribute value of the specific row is received using event.target.parent element
    - using the id, the key (first name + last name) is retrived from the props.phoneBook map
    - then this key is passed to the function
    - functions checks the key already exists in the map
    - if yes deletes the entry and updates the context state.
    - This triggers render and table is updated


### Task 1

1) Created two state variables
    a) one to hold the count of clicks
    b) another is an array to hold the clicked box element
2) When clicks on any box and handleClick event handler is called
3) it checks if this box is already clicked by checking its style class
3a) if yes, it skips the update
3b) if no, it proceeds to next step
4) it updates the clicks state variable by 1
5) then checks if array size is > 1 
5a) If yes, then pops out the first element from the array
5b) then bgcolor style is updated to blue for this poped element
6) adds the current event.target.element to the array state variable.
7) then bgcolor style is updated to red for the current element
8) then innerHtml is updated to show 'BOX ${CLICKS}`
