import React, { Component, Fragment } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    from: this.props.from || 0,
    to: this.props.to || 0,
    delay: this.props.delay || 1000
  }

  componentDidMount() {
    const { from, to, delay } = this.state;

    (async () => {
      for (let n = from; (from >= to) ? n >= to : n <= to; (from >= to) ? n-- : n++) {
        await new Promise((resolve) => setTimeout(() => {
          this.setState({ count: new Intl.NumberFormat().format(n) });
          resolve();
        }, delay));
      }
    })();
  }

  render() {
    return (
      <Fragment>
        {this.state.count}
      </Fragment>
    )
  }
}

export default Counter;
