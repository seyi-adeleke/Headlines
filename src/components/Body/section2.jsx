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
          <div className="col-md-6 col-md-offset-3">
            <ul>
              {
                Object.keys(obj).map((key)=>{
                  return <li>{(obj[key].description)}</li>;
                  })
                }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
