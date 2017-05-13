import React from 'react';
import {render} from 'react-dom';

//Styles
import '../style/index.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>React Webpack Starter</h1>
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);
