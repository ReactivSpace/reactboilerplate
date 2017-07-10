import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
const styles = {
  customWidth: {
    width: 300,
  },
};
const SignUpForm = ({
  handleChange,
  onSubmit,
  onChange,
  errors,
  user,
  value,
}) => (
  <Card className="login-container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="firstName"
          name="firstName"
          errorText={errors.firstName}
          onChange={onChange}
          value={user.firstName}
        />
      </div>
            <div className="field-line">
        <TextField
          floatingLabelText="lastName"
          name="lastName"
          errorText={errors.lastName}
          onChange={onChange}
          value={user.lastName}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="userName"
          name="userName"
          errorText={errors.userName}
          onChange={onChange}
          value={user.userName}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>
 <div >
        <SelectField
          floatingLabelText="Select role"
          value={value}
          name="role"
          onChange={handleChange}
          style={styles.customWidth}
        >
          <MenuItem value={3} primaryText="Plant Coordinator" />
          <MenuItem value={18} primaryText="Site Coordinator" />
          <MenuItem value={21} primaryText="Site Reviewer" />
          
        </SelectField>
        
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>
            <div className="field-line">
        <TextField
          floatingLabelText="confirmPassword"
          type="confirmPassword"
          name="confirmPassword"
          onChange={onChange}
          errorText={errors.confirmPassword}
          value={user.confirmPassword}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" primary />
      </div>

      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>
);

SignUpForm.propTypes = {
  handleChange:PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
};

export default SignUpForm;

