import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <Body />
      </div>
    );
  }
}
