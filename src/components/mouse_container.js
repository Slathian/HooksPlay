import React, { useState } from 'react';
import UseEffectMouse from './use_effect_mouse';

const MouseContainer = () => {

    const [display, setDisplay] = useState(true);
    
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <UseEffectMouse></UseEffectMouse>}
        </div>
    )
};
export default MouseContainer;