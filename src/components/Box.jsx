import React from 'react';

export default class Box extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    {'SCORE: ' + this.props.score}
                </div>

                <div className="row">
                    CURRENT QUESTION:{this.props.currentQuestion}
                </div>
            </div>
        );
    }
}