import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {

    static propTypes = {
        btnText: PropTypes.string.isRequired,
        h1Text: PropTypes.string.isRequired,
        newArray: PropTypes.array.isRequired
    };

    static defaultProps = {
        btnText: 'D'
    };

    btnOnClick(event) {
        // console.log('Button clicked', event.target);
    }

    render() {
        console.log('array', this.props.newArray);
        return (
            <div className="test">
                <h1>{ this.props.h1Text }</h1>
                <h3>It`s really working!</h3>
                <button onClick={this.btnOnClick}>{ this.props.btnText || 'Default'}</button>
            </div>
        );
    }

}

ReactDOM.render(
    <App h1Text="h1 text" newArray={[1, 2, 3]} />,
    document.getElementById('app')
);
