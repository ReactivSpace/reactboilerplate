import React from 'react'
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import {saveUser ,fetchUser, updateUser} from '../actions/userActions';
import UserForm from '../components/UserForm';

class UserFormPage extends React.Component {
  state={
redirect:false
  }
    componentDidMount=()=>{
        if(this.props.params.id){
          this.props.fetchUser(this.props.params.id);
        }
    }

    saveUser=({id,userFullName, userFirstName,userLastName,userName,emailAddress,UserRoleId})=>{
          if(id){
            return this.props.updateUser({id,userFullName, userFirstName,userLastName,userName,emailAddress,UserRoleId}).then(
                        ()=>{this.setState({ redirect :true  })},                       
                    );
           }else{
           return this.props.saveUser({userFullName, userFirstName,userLastName,userName,emailAddress,UserRoleId}).then(
               ()=>{this.setState({redirect:true})},
           
           );
        }
    }
render(){
    return(
          <div>
            {
              this.state.redirect?   
              <Redirect to="/listuser" />:
              <UserForm user={this.props.user}
              saveUser={this.saveUser}
              />
            }
          </div>
    );
}
}
function mapStateToProps(state, props) {
  if (props.params.id) {
    
   
    return {
      user:state.users[0]
    }
  }

  return { user: null };
}

export default connect(mapStateToProps,{saveUser,fetchUser,updateUser})(UserFormPage);
