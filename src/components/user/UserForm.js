import React from 'react';
import classnames from 'classnames';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class UserForm extends React.Component {
debugger;
    state = {
        
        id: this.props.user ? this.props.user.id : null,
        userFullName: this.props.user ? this.props.user.userFullName :'',
        userFirstName: this.props.user ? this.props.user.userFirstName :'',
        userLastName: this.props.user ? this.props.user.userLastName :'',
        userName: this.props.user ? this.props.user.userName :'',
        emailAddress: this.props.user ? this.props.user.emailAddress :'',
        UserRoleId: this.props.user ? this.props.user.UserRoleId :'',
        errors: {},
        loading:false
       
    }
 debugger;
    componentWillReceiveProps=(nextProps)=>{
        debugger;
        this.setState({
            id:nextProps.user.data.id,
            userFullName:nextProps.user.data.userFullName,
            userFirstName:nextProps.user.data.userFirstName,
            userLastName:nextProps.user.data.userLastName,
            userName:nextProps.user.data.userName,
            emailAddress:nextProps.user.data.emailAddress,
            UserRoleId:nextProps.user.data.UserRoleId
        });
           //this.alert(nextProps);
    }
    

    handleChange = (e) => {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        //validation
        let errors = {};
        if (this.state.userFullName === '') 
            errors.userFullName = "Can't be empty";
                if (this.state.userFirstName === '') 
            errors.userFirstName = "Can't be empty";
                if (this.state.userLastName === '') 
            errors.userLastName = "Can't be empty";
                if (this.state.userName === '') 
            errors.userName = "Can't be empty";
                if (this.state.emailAddress === '') 
            errors.emailAddress = "Can't be empty";
                if (this.state.UserRoleId === '') 
            errors.UserRoleId = "Can't be empty";
        this.setState({errors});
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            const {id,userFullName, userFirstName,userLastName,userName,emailAddress,UserRoleId} = this.state;
            this.setState({loading:true});
            debugger;
         this.props.saveUser({id,userFullName, userFirstName,userLastName,userName,emailAddress,UserRoleId})
        // .catch((err)=>err.response.json(err).then(({errors}) => this.setState({errors,loading:false})));
        }
    }

    render() {
        const form=( 
            <Card className="container">

            <form className={classnames({loading:this.state.loading})} onSubmit={this.handleSubmit}>
             <h2 className="card-heading">Edit User</h2>
              {!!this.state.errors.global && <p className="error-message">{this.state.errors.global}</p>}

  <div className="field-line">
        <TextField
          floatingLabelText="userFullName"
          name="userFullName"
          errorText={!!this.state.errors.userFullName}
          onChange={this.handleChange}
          value={this.state.userFullName}
        />
     </div>
    <div className="field-line">
        <TextField floatingLabelText="userFirstName"
          name="userFirstName"
          errorText={!!this.state.errors.userFirstName}
         onChange={this.handleChange}
          value={this.state.userFirstName} />
     </div>

      <div className="field-line">
        <TextField
          floatingLabelText="userLastName"
          name="userLastName"
          errorText={!!this.state.errors.userLastName}
         onChange={this.handleChange}
          value={this.state.userLastName}/>
     </div>
         <div className="field-line">
        <TextField floatingLabelText="userName"
          name="userName"
          errorText={!!this.state.errors.userName}
         onChange={this.handleChange}
          value={this.state.userName}/> 
          </div>

          <div className="field-line">
        <TextField
          floatingLabelText="emailAddress"
          name="emailAddress"
          errorText={!!this.state.errors.emailAddress}
         onChange={this.handleChange}
          value={this.state.emailAddress}/>
     </div>
      <div >
        <SelectField
          floatingLabelText="Select role"
          value={this.state.UserRoleId}
          name="role"
          onChange={this.handleChange}
          >
          <MenuItem value={3} primaryText="Plant Coordinator" />
          <MenuItem value={18} primaryText="Site Coordinator" />
          <MenuItem value={21} primaryText="Site Reviewer" />
          
        </SelectField>
        
      </div>
  <div className="button-line">
        <RaisedButton type="submit" label="Update Account" primary />
      </div>
            </form>
             </Card>);
        return (
           <div>
               {form}
           </div>
        );
    }
}

export default UserForm;