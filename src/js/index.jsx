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
            <div>React Webpack Starter</div>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);
