import React from 'react';

import './styles/main.scss';

import UseStateExamples from './components/usestate_hook_examples';
import UseEffectHookExampleOne from './components/use_effect_hook_example_one'
import UseEffectHookExampleTwo from './components/use_effect_hook_example_two'
import UseEffectMouse from './components/use_effect_mouse';
import MouseContainer from './components/mouse_container';
import IntervalClassCounter from './components/use_effect_interval_class_counter'
import Fetch from './components/use_effect_concluded';



// import thumb from './images/thumb_image.png';

const App = () => (
    <div className="default">
        
    {/* <UseStateExamples /> */}
    
    {/* <UseEffectHookExampleOne /> */}

    {/* <UseEffectHookExampleTwo /> */}

    {/* <UseEffectMouse /> */}

    {/* <MouseContainer /> */}

    {/* <IntervalClassCounter /> */}

    <Fetch />

    </div>
);

export default App;