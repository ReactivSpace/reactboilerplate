import React, { PropTypes } from 'react';
import SignUpForm from '../components/SignUpForm.js';


class SignUpPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      value: 1,
      errors: {},
      user: {
        firstName:'',
        lastName:'',
        email: '',
        userName: '',
        password: '',
        confirmPassword:'',
        role:''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    // create a string for an HTTP body message
    const firstName = encodeURIComponent(this.state.user.firstName);
    const lastName = encodeURIComponent(this.state.user.lastName);
    const userName = encodeURIComponent(this.state.user.userName);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const confirmPassword = encodeURIComponent(this.state.user.confirmPassword);
    const role = encodeURIComponent(this.state.value);
    // const emailVerified = false;
  const formData = `firstName=${firstName}&lastName=${lastName}&userName=${userName}&email=${email}&password=${password}&confirmPassword=${confirmPassword}&UserRoleId=${role}`;
  console.log(role);
    // create an AJAX request
    const xhr = new XMLHttpRequest();
      //  xhr.open('post', 'http://localhost:3000/api/Users');
    xhr.open('post', 'http://localhost:3000/api/v1/user/signUp');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });
        // set a message
        localStorage.setItem('successMessage', "User created!");
        debugger;
       console.log(xhr.response.data);
       console.log(role);
        const xhr2 = new XMLHttpRequest();
          // xhr2.open('post', 'http://localhost:3000/api/RoleMappings');
        xhr2.open('post', 'http://localhost:3000/api/v1/user/userRole');
        xhr2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr2.responseType = 'json';
        const name = role;
        const UserId = xhr.response.data.id;
       // const roleId = role;
        const formData2 = `name=${name}&UserId=${UserId}&RoleId=${role}`;
        
        xhr2.send(formData2);


        // make a redirect
        this.context.router.replace('/login');
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }


  handleChange = (event, index, value) => this.setState({value});
  /**
   * Render the component.
   */
  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        handleChange={this.handleChange}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
        value={this.state.value}
      />
    );
  }

}

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpPage;
