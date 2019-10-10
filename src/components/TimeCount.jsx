import React from 'react';

export default class TimeCount extends React.Component {

    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.onTimeCountChange();
        }, 1000);
    }

    componentDidUpdate() {
        if (this.props.finished === true /* || this.props.timeLeft <= 0 */) {
            clearTimeout(this.interval);
        }
    }

    render() {
        return (
            <div className="row">
                {'TIME LEFT: ' + this.props.timeLeft}

            </div>
        );
    }
}