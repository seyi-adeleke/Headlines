import React from 'react';

class SelectNewsSource extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { source: 'TechCrunch' };
  }
  handleChange(event) {
    this.setState({
      source: event.target.value
    });
    this.props.getSource(event.target.value);
  }
  render() {
    return (
      <div className="form-group">
        <label>Source</label>
        <div className="col-sm-12">
          <select
            defaultValue={this.state.source}
            onChange={this.handleChange}
            className="form-control"
          >
            <option>TechCrunch</option>
            <option>Top</option>
            <option>Latest</option>
            <option>Popular</option>
          </select>
        </div>
      </div>
    );
  }
}

class SelectSortOrder extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { sort: '' };
  }
  handleChange(event) {
    this.setState({
      sort: event.target.value
    });
    this.props.getSort(event.target.value);
  }
  render(){
    return (
      <div className="form-group">
        <label>Priority</label>
        <div className="col-sm-12">
          <select
            className="form-control"
            defaultValue={this.state.sort}
            onChange={this.handleChange}
            className="form-control"
          >
            <option>Top</option>
            <option>Latest</option>
            <option>Popular</option>
          </select>
        </div>
      </div>
    );
  }
}

export default class Section1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { source: 'TechCrunch', sort: 'top' };
    this.newSource = this.newSource.bind(this);
    this.newSort = this.newSort.bind(this);
    this.getLatestNews = this.getLatestNews.bind(this);
  }
  getLatestNews() {
    console.log(this.state.source);
    console.log(this.state.sort);
  }
  newSource(newState) {
    this.setState({ source: newState });
  }
  newSort(newState) {
    this.setState({ sort: newState });
  }
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <SelectNewsSource getSource={(newState) => this.newSource(newState)} />
          </div>
          <div className="col-md-4">
            <SelectSortOrder getSort={(newState) => this.newSort(newState)} />
          </div>
          <div className="col-md-4" style={{ marginTop: 20 }}>
            <button onClick={this.getLatestNews} className="btn search-btn"><b>Get News</b></button>
          </div>
        </div>
      </div>
    );
  }
}
