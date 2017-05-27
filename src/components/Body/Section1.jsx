import React from 'react';
import axios from 'axios';
import SelectNewsSource from './SelectNewsSource.jsx';
import SelectSortOrder from './SelectSortOrder.jsx';
import Section2 from './Section2.jsx';


export default class Section1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { source: 'TechCrunch', sort: 'top', info: '', showResults: false };
    this.newSource = this.newSource.bind(this);
    this.newSort = this.newSort.bind(this);
    this.getLatestNews = this.getLatestNews.bind(this);
  }
  getLatestNews() {
    axios.get(`https://newsapi.org/v1/articles?source=${this.state.source}&sortBy=${this.state.sort}&apiKey=213327409d384371851777e7c7f78dfe`)
      .then((response) => {
        this.setState({ info: response.data,
          showResults: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  newSource(newState) {
    this.setState({ source: newState });
  }
  newSort(newState) {
    this.setState({ sort: newState });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <SelectNewsSource getSource={newState => this.newSource(newState)} />
            </div>
            <div className="col-md-4">
              <SelectSortOrder getSort={newState => this.newSort(newState)} />
            </div>
            <div className="col-md-4" style={{ marginTop: 20 }}>
              <button
                onClick={this.getLatestNews}
                className="btn search-btn"
              >
                <b>Get News</b>
              </button>
            </div>
          </div>
        </div>
        {this.state.showResults ? <Section2 data={this.state.info} /> : null}
      </div>
    );
  }
}
