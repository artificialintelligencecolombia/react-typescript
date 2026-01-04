// React/External llibraries
import { useState } from 'react'

// Types/Interfaces
import type { Todo } from './model';

// Assets (images, etc)
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Styles
import './App2.css'

// Local Components
import InputField from './components/inputField'
import TodoList from './components/todoList';

// Declaration and initialization of variables
let name: string;
let age: number = 25;
let isStudent: boolean = true;
let hobbies: string[]; // array of string data types
let role: [number, string]; // tuple

name = "Dani";

// Define object
type Tool = {
  name: string;
  isAvailable?: boolean; // The ? symbol is for optional
}

// Initialization of the object
let tool: Tool = {
  name: "Lovable",
  isAvailable: true,
};

let multipleTools: Tool[]; // Declaration of an array of objects

let rating: number | string; // Union type, a variable can be multiple types
rating = "five";
console.log(rating);

// Function declaration method 1
function printName(name: string): void { 
  console.log(name)
}

// Function declaration method 2
let printName2 = (name: string): void => {
  console.log(name);
}

// Function calls
printName(name)
printName2(name)


// REACT COMPONENTS

// Function declaration
function App() {

  return (
    <>
      <h1>My first App</h1>
      <p>This is just a test</p>
      <button onClick={() => alert(`Hi! ${name}`)}>Press Button!</button>
      <p>{tool.name}</p>
    </>
  )
};

// Arrow function
const App2 = () => {
  return(
    <>
      <h1>Hello</h1>
    </>
  )
};

const App3: React.FC = () => {
  return(
    <>
      <h1>Hello from functional component type definition</h1>
    </>
  )
};

// App is a functional component: a function that returns JSX (UI blueprint)
const App4: React.FC = () => {

  // State variables: store data that change over time and tell react to update UI
  // 1. Create state ' State: creates variable todo (variable) text (string), triggers re-render when setTodo updates it
  const [todo, setTodo] = useState<string>(""); 
  //     ^      ^
  //     |      |
  //     |      └─ Function to update the state
  //     └─ Current state value
  const [todos, setTodos] = useState<Todo[]>([]);

  // Event handler function
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo("");
    }
  };

  console.log(todos)

  return(
    // 2. Parent (App) passes the props to child: todo(data) and setTodo(function) to InputsField. Parent controls them and child displays them
    <>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos}/>
    </>
  )
};

export default App4
