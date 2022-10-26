# Learning Objectives
1.**React** is:

    - It's composable: small pieces to create something bigger.
    - It's Declarative

2. JSX

    >```js
    >const page = (
    >   <div>
    >       <h1 className="header">This is JSX</h1>
    >       <p>This is a paragraph</p>
    >   </div> 
    >)
    >ReactDOM.render(page, document.getElementById("root"))
    ```
)

    
3. Custom Components
    ##### A Basic Example in your JS file:
    > ```js
    >    function List() {
    >    return (
    >        <ul className="pooppeepoop">
    >            <li>poop</li>
    >            <li>peep</li>
    >            <li>poop</li>
    >        </ul>
    >    )
    >    }
    >    ReactDOM.render(
    >        <div>
    >            <List />
    >        </div>,
    >        document.getElementById("root")
    >    )
    > ```
4. Styling

<hr>

># Some handy Resources
>>- [JavaScript RECAP](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview)
>>- [SCRIMBA REACT TUTORIAL](https://scrimba.com/learn/learnreact)
>>- [REACT TURORIAL](https://reactjs.org/tutorial/tutorial.html)
># to check out!
