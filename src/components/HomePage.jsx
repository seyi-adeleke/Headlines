import React from 'react';
import GoogleLogin from 'react-google-login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { credentials: {
      email: '',
      name: ''
    } };
    this.googleResponse = this.googleResponse.bind(this);
  }

  googleResponse(response) {
    const user = response.profileObj;
    if (response) {
      localStorage.setItem('jwtToken', 'user');
      this.setState({
        credentials: {
          email: user.email,
          name: user.name
        }
      });
      window.location = '/#/sources';
    } else {
      window.location = '/#/';
    }
  }
  render() {
    return (
      <div>
        <form>
          <div className="text-center">
            <div className="text-center">
              <h2 className="page-header text-center"><em>HEADLINES</em></h2>
              <p>Get the latest News from your favourite blogs..</p>
              <p>Sign in to get started</p>
            </div>
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Sign In"
              onSuccess={this.googleResponse}
              onFailure={this.googleResponse}
            ><i className="fa fa-google-plus" /></GoogleLogin>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
