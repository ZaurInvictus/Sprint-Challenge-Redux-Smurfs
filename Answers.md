1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
 
concat(), filter(), map() - for Arrays
Object.assign() - for Objects

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Action creates an action and passes it to the reducers. Reducers updates the store where state of an applications lives. Store updates UI. This is how Redux data flow works.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?


Application state is global, the component state is local. Redux uses a store to hold application state. Any component, anywhere in the app can access it, as long as they hook into it.
Component state however, lives within that specific component and it can only be updated within that component and passed down to its children via props.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets us to call action creators that return a function instead of an action object. 
That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()