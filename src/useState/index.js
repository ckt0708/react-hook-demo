import React, { useState, useEffect } from 'react';

function Example(props) {
    console.log("Example--------",props)
    // 声明一个叫 “count” 的 state 变量
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times11111`;
    });
    
    
    return (
        <div className="example">
            <p>You clicked {count} times {props.name}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}


export default Example;