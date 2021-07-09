import React, { useState } from 'react';

function useStateExamples () {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const [name, changeName] = useState({firstName: '', lastName: ''});

    return (
        <div className="default">

            <div className="buttons">
                <button onClick={() => setCount(prevCount => prevCount + 1)}>
                    Increment
                </button>

                <button onClick={() => setCount(prevCount => prevCount - 1)}>
                    Decrement
                </button>
            </div>
            <div className="counters">
                <h2>{count}</h2>
            </div>

            <div className="inputFields">
                <input value={name.firstName} onChange={e => changeName({...name, firstName: e.target.value})}/>
                <input value={name.lastName} onChange={e => changeName({...name, lastName: e.target.value})}/>
            </div>

            <div className="nameDisplay">
                <h1>Your first name is: {name.firstName}</h1>
                <h1>And your last name is: {name.lastName}</h1>
                <h1>{JSON.stringify(name)}</h1>
                {/* Whenever I get the error where an object doesnt work in my HTML, I need to use JSON.stringify() to render the object! */}
            </div>

        </div>
        );
};

export default useStateExamples;