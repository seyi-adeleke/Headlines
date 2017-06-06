import React from 'react';


export default class Section2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }
  render() {
    const obj = this.props.data.list;
    const sourceName = obj.source;
    const sourceData = obj.articles;
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary panel-table">
              <div className="panel-heading">
                <h3 className="panel-title text-center">
                  The Latest Headlines from {sourceName}
                </h3>
              </div>
              <div className="panel-body">
                <table className="table table-striped table-bordered table-list">
                  <thead>
                    <tr>
                      <th><i className="fa-3x fa fa-photo" /></th>
                      <th>Author</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Go to Article</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    Object.keys(sourceData).map(key =>
                    <tr>
                      <td>
                        <img
                          alt="Not Available"
                          style={{ width: 105 }}
                          src={(sourceData[key].urlToImage)}
                        />
                      </td>
                      <td>{(sourceData[key].author)}</td>
                      <td>{(sourceData[key].title)}</td>
                      <td>{(sourceData[key].description)}</td>
                      <td><a rel="noopener noreferrer" target="_blank" href={(sourceData[key].url)}>
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
