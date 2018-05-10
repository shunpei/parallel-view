import * as React from 'react';

export default class App extends React.Component {
  props: Props;

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
