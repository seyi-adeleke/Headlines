import React from 'react';

export default class SelectSortOrder extends React.Component{
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
  render() {
    return (
      <div className="form-group">
        <label>Priority</label>
        <div className="col-sm-12">
          <select
            className="form-control"
            defaultValue={this.state.sort}
            onChange={this.handleChange}
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
