import React from 'react';
import ReactDOM from 'react-dom';

import Card from "./card";

function Main() {
    return (
        <div>
            <Card/>
        </div>
    );
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
