import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    btnOnClick(event) {
        console.log('Button clicked', event.target);
    }

    render() {
        return (
            <div className="test">
                <h1>App works!</h1>
                <h3>It`s really working!</h3>
                <button onClick={this.btnOnClick}>{ this.props.children }</button>
            </div>
        );
    }

}

ReactDOM.render(
    <App>Click on me!</App>,
    document.getElementById('app')
);
