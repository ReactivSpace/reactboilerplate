import React from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {saveUser ,fetchUser, updateUser} from '../../actions/ProfileAction';
import GameForm from './GameForm';

class UserRequestPage extends React.Component {
  state={
redirect:false
  }
    componentDidMount=()=>{
        if(this.props.params._id){
            this.props.fetchGame(this.props.params._id);
        }
    }

    saveUser=({userid,firstname,lastname,designation,organization,managername,emailid,cegstatus,hrstatus,isvalid})=>{
          if(userid){
            return this.props.updateUser({userid,firstname, lastname,designation,organization,managername,emailid,cegstatus,hrstatus,isvalid}).then(
                        ()=>{this.setState({redirect :true})},
                       
                    );
           }else{
           return this.props.saveUser({firstname, lastname,designation,organization,managername,emailid,cegstatus,isvalid}).then(
               ()=>{this.setState({redirect:true})},
           
           );
        }
    }
render(){
    return(
          <div>
            {
              {/*this.state.redirect?   
              <Redirect to="/games" />:
              <GameForm 
              game={this.props.game}
              saveGame={this.saveGame}
              />*/}
            }
          </div>
    );
}
}
function mapStateToProps(state, props) {
  if (props.params.userid) {
    return {
      userProfile: state.userProfile.find(item => item.userid === props.params.userid)
    }
  }

  return { userProfile: null };
}

export default connect(mapStateToProps,{saveUser,fetchUser,updateUser})(UserRequestPage);
