import React, {useState} from 'react';

const Count = () => {
    const [count, setCount] = useState(8);
    var date = new Date();
    function getDate() {
        
    }

    console.log(date)

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <div>{count}</div>
    <div>{date}</div>
        </div>
    )
}

export default Count;