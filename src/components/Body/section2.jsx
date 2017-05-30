import React from 'react';


export default class Section2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }
  render() {
    const obj = this.props.data.articles;
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary panel-table">
              <div className="panel-heading">
                <h3 className="panel-title text-center">
                  The Latest Headlines from {this.props.data.source}
                </h3>
              </div>
              <div className="panel-body">
                <table className="table table-striped table-bordered table-list">
                  <thead>
                    <tr>
                      <th><i className="fa-4x fa fa-photo" /></th>
                      <th>Author</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Go to Article</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    Object.keys(obj).map(key =>
                    <tr>
                      <td><img alt="news" style={{ width: 105 }} src={(obj[key].urlToImage)} /></td>
                      <td>{(obj[key].author)}</td>
                      <td>{(obj[key].title)}</td>
                      <td>{(obj[key].description)}</td>
                      <td><a rel="noopener noreferrer" target="_blank" href={(obj[key].url)}>
                        Go To Article
                      </a>
                      </td>
                    </tr>
                    )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
