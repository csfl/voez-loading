import React from 'react';
import ReactDom from 'react-dom';

import LoadingIcon from './components/LoadingIcon';
import LoadingText from './components/LoadingText';

import './styles/main.scss';

class App extends React.Component{
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="main-container">
                <div className="bgi-glass"></div>
                <div className="voez-load-container">
                    <div className="opacity"></div>
                </div>
                <LoadingIcon className="loading-icon-main" style={{
                    position: 'absolute',
                    top: -10,
                    left: 6,
                    zIndex: 10
                }} />
                <LoadingText
                            text="Loading..."
                            position="absolute"
                            top={220}
                            left={3}
                            fontSize={15}
                            zIndex={20}/>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'));