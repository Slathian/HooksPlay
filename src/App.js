import React from "react";

import "./styles/main.scss";

import thumb from './images/thumb_image.png';

const App = () => (
    <div className="default">
        <div className="title">
            Template
        </div>

        <div className="image">
            <img src={thumb} alt="default-image" />
        </div>

    </div>
);

export default App;