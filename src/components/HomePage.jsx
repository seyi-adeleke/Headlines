import React from 'react';
import GoogleLogin from 'react-google-login';
import action from '../Actions/actions-auth.js';
import store from '../store/authStore.js';
import { Link } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { credentials: {
      email: '',
      name: ''
      }, 
    info: '',
    showButton : false
     };
    this.googleResponse = this.googleResponse.bind(this);
    this.onChange = this.onChange.bind(this);
  }
 componentDidMount() {
    store.addChangeListener(this.onChange);
  }
  componentDidUnMount(){
    store.removeChangeListener(this.onChange);
  }
  onChange() {
    this.setState({ info: store.getUser() });
  }
  googleResponse(response) {
    action.getUser(response.profileObj);
    const user = response.profileObj;
    if (response) {
      this.setState({
        showButton : true,
        info: user,
        credentials: {
          email: user.email,
          name: user.name
        }
      });
    } else {
      window.location = '/#/';
    }
  }
  render() {
    return (
      <div>
      <p></p>
        <form>
          <div className="text-center">
            <div className="text-center">
              <h2 className="page-header text-center"><em>HEADLINES</em></h2>
              <p>Get the latest News from your favourite blogs..</p>
              </div>
              {this.state.showButton ? false :  <p>Sign in to get started</p> }
              { this.state.showButton ? false : 
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Sign In"
              onSuccess={this.googleResponse}
              onFailure={this.googleResponse}
            ><i className="fa fa-google-plus" /></GoogleLogin> }
            {this.state.showButton ? <p className="text-center">Welcome, {this.state.info.name}</p>
            : null}
            { this.state.showButton ? <div className="col-md-4" style={{ marginTop: 20 }}>
            
            <Link to={'headlines'}><button
              className="btn search-btn"
              >
                <b>Get News</b>
              </button>
              </Link>
            </div> : null
             
          }
            
            
          </div>
        </form>
      </div>
    );
  }
}

export default Login;