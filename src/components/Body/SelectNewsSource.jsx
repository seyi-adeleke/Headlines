import React from 'react';
import request from 'superagent';
import Sources from '../../utils/SourcesApi.js';


export default class SelectNewsSource extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { source: '', newsSources:[]};
  }
  componentDidMount() {
   this.serverRequest = request.get('https://newsapi.org/v1/sources?language=en')
    .end((error, response) => {
      if (error) {
        return error;
      }
      this.setState({
        newsSources: response.body.sources,
        source : response.body.sources[0].id
      })
    });
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }

  handleChange(event) {
    console.log(event.target.value)
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
            {this.state.newsSources.map(function(sources) {
          return (
           <option key={sources.id} value={sources.id}> {sources.name} </option>
          );
        })}
          </select>
        </div>
      </div>
    );
  }
}
