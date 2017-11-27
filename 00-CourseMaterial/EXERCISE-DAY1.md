# Übung React 

## Exercise 1: create-react-app

Set up a new React project:

	npm i -g create-react-app serve
	create-react-app awesome-app
	cd awesome-app
	npm start
	
### 1.1 Running in development mode

Inspect the generated app ...  
Open the browser developer tools and inspect the resources the browser actually loads over the network.  
Change the displayed text of the app.

Debug the app in Chrome:

- Open developer tools
- Open the sources tab
- Open the component sources: Hit Ctrl-P and type 'App.js'
- Set a breakpoint in the render method

Navigate a Internet Explorer to `http://localhost:4200/`. Does it run in IE?

### 1.2 Creating a Production Build

Create the production artifacts:

	npm run build 
	
Inspect the contents of `build`.  
The content of `build` can be served with any webserver.  
We can use the npm package `serve` as a simple webserver:

	serve -s -o build
	
Open the browser developer tools and inspect the resources the browser actually loads over the network.  
What are the differences to the development build?


### 1.6 Running the Tests

Execute the tests:

	npm run test
	
Inspect the tests in `src/App.test.js`.  
Write a test that verifies that `Welcome to React` is rendered.  
Modify a test so that it fails.  
Can you run a single test?
Can you debug the tests?  



## Exercise 2: Write your first component

In the project directory from exercise 1:

- Create a `Greeter` component that displays "Hello World"
- Use the component in the existing `App`-Component
- Change the `Greeter`-Component: It should have a input where you can type your name and below the input the message "Hello <name>" should be displayed.
- Try to debug by using the "React Developer Tools" extension in Chrome/Firefox.
- (Optional) Write a test for the `Greeter`-Component so that this behaviour is checked.



## Exercise 3: Komponenten-Structure

Change the example `02-Components/07-Event`, so so that each `Clock` component has it's own *Refresh*-Button.



## Exercise 4: Komponenten-Structure

Inspect the example `02-Components/90-Exercise`: Open `index.html` in a browser.  
The whole application is implemented as a single component.  
Refactor the code by extracting several components:
- a component for the whole list.
- a component for the list title
- a component for a single entry in the list
- the "like button"  should inclrease the like-count of the matching champion




## Exercise 5: ToDo App - Basic Functionality

Implement a simple ToDo App.

Start with the prepared project `10-ToDOApp/00-todo-skeleton`:

	npm install
	npm start
	
Implement the functionality of the app in the single App component:

- Adding ToDos
- Removing ToDos	


## Exercise 6: ToDo App - Component Architecture

Split the ToDo App onto smaller components:

- `App` component: This shoud be a *container component* that manages the state of the application.
- `NewToDo` component: Manages the user input for a new ToDo item.
- `ToDoList` component: Displays a list of ToDo items.
- `ToDoListItem` component: Displays a single ToDo item. Converts a DOM interactions to application logic.

Optional:

- `NewToDo` component: Implement a HTML-Form. Prevent empty ToDo items.
- Implement runtime checks of component interfaces with `PropTypes`