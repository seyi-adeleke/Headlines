import React from 'react';

export default class SelectNewsSource extends React.Component {
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
