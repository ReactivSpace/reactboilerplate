import React from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
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

    saveUser=({id,title,cover})=>{
          if(id){
            return this.props.updateUser({id,title, cover}).then(
                        ()=>{this.setState({redirect :true})},
                       
                    );
           }else{
           return this.props.saveUser({title, cover}).then(
               ()=>{this.setState({redirect:true})},
           
           );
        }
    }
render(){
    return(
          <div>
            {
              this.state.redirect?   
              <Redirect to="/users" />:
              <UserForm 
              user={this.props.user}
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
      user: state.users.find(item => item.id === props.params.id)
    }
  }

  return { user: null };
}

export default connect(mapStateToProps,{saveUser,fetchUser,updateUser})(UserFormPage);
