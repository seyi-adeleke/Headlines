import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: false
    };
    this.checkToken = this.checkToken.bind(this);
  }
  checkToken() {
    const Token =  localStorage.getItem('jwtToken');
    if (Token === 'user') {
      localStorage.setItem('jwtToken', 'no-user');
      window.location = '/#/';
      this.setState({
        token: false
      });
    } else {
      this.setState({
        token: true
      });
      alert('only signed in users can log out');
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
                  <li onClick={this.checkToken}><a className="navbar-brand" >
                    <b>Log Out</b></a></li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
