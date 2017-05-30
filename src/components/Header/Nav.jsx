import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: false
    };
    this.checkToken = this.checkToken.bind(this);
  }
  checkToken() {
    let Token = localStorage.getItem('jwtToken');
    if (Token) {
      Token = null;
      this.setState({
        token: false
      });
    } else {
      this.setState({
        token: true
      });
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-tv-tracker navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/"><b>HEADLINES</b></a>
            </div>
            <div className="collapse navbar-collapse" id="navbar">
              <form>
                <ul className="nav navbar-nav navbar-right">
                  <li onClick={this.checkToken}><Link to="/">Log Out</Link></li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
