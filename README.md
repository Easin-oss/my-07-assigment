What is JSX, and why is it used? 
ans:JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML but works inside React. It allows you to write UI elements in a more readable way.
akes writing React components more intuitive.
Lets you combine JavaScript and HTML in the same file.
React transforms JSX into React.createElement() calls under the hood.


What is the difference between State and Props?
ans:Feature	State	Props
Definition	Local data managed within a component	Data passed from parent to child component
Mutability	Can be changed (mutable)	Read-only (immutable)
Purpose	To handle dynamic data in a component	To configure child components with data
Managed by	Component itself	Parent component
Example	const [count, setCount] = useState(0)	<Child message="Hello" />


What is the useState hook, and how does it work?
ans:useState is a React Hook that allows functional components to have state
count → current state value.
setCount → function to update the state.
Component re-renders automatically when state changes.


How can you share state between components in React?
ans:
Lift State Up – Move the state to a common parent component and pass it down via props.




How is event handling done in React?
ans: React uses camelCase syntax for events (unlike HTML).

Functions are passed as callbacks instead of strings.
