import React from 'react';
import "./Question.css"

const Question = () => {
    return (
        <div className='question-container'>
            <h3>How does react work?</h3>
            <p><small>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
            It's possible to have as many components as necessary without cluttering your code.</small></p>
            <h3>What is the difference between props and state?</h3>
            <p><small>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</small></p>
            <h3>UseEffect use for which works?</h3>
            <p><small>The useEffect hook is the Swiss Army knife of all the hooks. Its the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.</small></p>
        </div>
    );
};

export default Question;