# React
It's a JS library for building user interfaces.
React's primary purpose is SPEED

**Components use props/state -> Trigger re-renders -> Update Virtual DOM -> React efficiently updates real DOM**

## Single Page Applications
React is a very common tool to build SPA. A SPA is a template where the components of the DOM are updated on user interactions

### Comparative HTML vs React
index.html - Home component
profile.html - profile component
product.html - product component

## Components
**Reusable UI building blocks**

Are what make up the visual layer of the app.They allow us to split the UI into independent reusable pieces

A component is a JS **class or function that returns back html code (JSX).**

## Component Composition
Building complex UIs from smaller components

**Note:** a component can be nested as deep as we want.

### Function-based components
Example:
function Profile() {
    return (
        <div>
            <p>Welcome</p>
        </div>
    )
}

## JSX
(JS XML)
It's HTML-like code in JS. It has syntax differences and has more functionalities:
- passing variables {var}
- adding JS logic directly into the HTML
- class declarations
- event handling

Browsers can read JSX by running it through a compiler and converting it into traditional HTML + JS code

## React Router
It allows to have multiple pages in a SPA

## Props
**Read-only data**
Data ppassed from a parent component to another, to be used anywhere in the child component.

**Note:** Props can be passed through nested components, it's not the best practice tho. (Prop drilling)

## State
**Mutable data managed within a component -> TRIGGERS RE-RENDER**

Is an object to represent information in a component or about a component. For this, we use React Hooks like:
useState()
to create a component state

Example:

function Notes(){
    let [notes, setNotes] = useState([])

    return(
        <ul>
            {notes.map(note => (
                <li>{note.title}</li>
            ))}
        </ul>
    )
}

### Update a state
Example:

let [note, setNotes] = useState([})

let getNotes = async () = {
    let response = await fetch('/notes')
    let data = await response.json()
    setNotes(data)
}

## Component Lifecycle
1. Initialization
2. Mounting
3. Updating
3. Unmounting

We can work with all the lifecycle methods with function components such as:
useEffect(()=> {
    //Takes care of all 3 lifecycle methods
    }, [Dependencies])

## Hooks
Hooks let us add state and other features without using class-based components.
Hooks are functions that allow us to hook into and manage state

### Common Hooks
- useState(): manages (set & update) component state
- useEffect(): Handles side effects (API calls, subscriptions, DOM updates) function that allow us manage our component lifecycle
- useContext(): Accessess context values without prop drilling
- useReducer(): manages complex state logic
- useCallback(): memorizes function references
- useMemo(): memorizes expensive calculations
- useRef(): References DOM elements or persists values without re-renders

## State Management

## Virtual DOM
It's the method how React builds and updates the DOM and the components complete lifecycle.
React creates a virtual DOM, which is a virtual representation of the real DOM. 

When we're updating the components, we're updating the virtual DOM, so react can find the most efficient way to update the real DOM -> by updating only areas where changes have been made without having to update the entire DOM

## Key Prop

## Event listeners
**Responding to user interactions**
In react we camelCase event names and we passed the function we want to call directly in line between curly braces

Example:
<li onClick={openNote}>

## Lists & Keys
**Rendering arrays with unique identifiers**

## Controlled Components
**Form inputs controlled by React state**

## Conditional Rendering
**Showing UI based on conditions**
It consists in the rendering of the content conditionally depending on other values inside the application

### If with logical && Operator
Example:
return (
    <div>
        {isAuthenticated && <span>Hello {user.name}</span> }
    </div>
)

### If-Else with Conditional Operator
Example:
return(
    <div>
        {isAuthenticated ? (
            <span>Hello {user.name}</span>
        ): (
            <span>Please Login</span>
        )}
    </div>
)

## Context API
**Global state management without prop drilling**

## React Commands
- npx creact-react-app <apppname>: creates the boilerplate files for a reeact app
- npm start: starts up the development server
- npm run dev
- npm run build: 
