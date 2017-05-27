import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-tv-tracker navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/"><b>HEADLINES</b></a>
            </div>
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/favourites">Favourites</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
