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
const UserRequestForm = ({
  handleChange,
  onSubmit,
  onChange,
  errors,
  user,
  value,
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">User Request Form</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText=" Username"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>
       <div className="field-line">
        <TextField
          floatingLabelText=" User Group"
          name="usergroup"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
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
          <MenuItem value={1} primaryText="Plant Coordinator" />
          <MenuItem value={2} primaryText="Site Coordinator" />
          <MenuItem value={3} primaryText="Site Reviewer" />
          
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

      <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" primary />
      </div>

      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>
);

UserRequestForm.propTypes = {
  handleChange:PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
};

export default UserRequestForm;

