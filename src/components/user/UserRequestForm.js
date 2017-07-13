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

  user,
  value,
}) => (
  <Card className="container">
    <form className="container" action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">User Request Form</h2>
      <div className="field-line">
        <TextField
          floatingLabelText="Username"
          name="Username"
          onChange={onChange}
         
        />
      </div>
  <div className="field-line">
        <TextField
          floatingLabelText="User Group"
          name="User Group"
          onChange={onChange}
         
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Application"
          name="Application"
          onChange={onChange}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Requesting Role"
          name="Requesting Role"
          onChange={onChange}
        />
      </div>

           <div>
        <SelectField
          floatingLabelText="Action"
          value={value}
          name="action"
          onChange={handleChange}
          style={styles.customWidth}
        >
          <MenuItem value={1} primaryText="Plant Coordinator" />
          <MenuItem value={2} primaryText="Site Coordinator" />
          <MenuItem value={3} primaryText="Site Reviewer" />
        </SelectField>
      </div>
           <div>
        <SelectField
          floatingLabelText="Modules"
          value={value}
          name="modules"
          onChange={handleChange}
          style={styles.customWidth}
        >
          <MenuItem value={1} primaryText="Plant Coordinator" />
          <MenuItem value={2} primaryText="Site Coordinator" />
          <MenuItem value={3} primaryText="Site Reviewer" />
        </SelectField>
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" primary />
      </div>

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

